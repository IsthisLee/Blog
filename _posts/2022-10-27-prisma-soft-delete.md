---
layout: post
title: "[Prisma] prisma soft delete 적용하기"
author: isthis
categories: [issue, prisma]
tags: [orm, prisma, db]
image: assets/images/13.jpg
description: "prisma soft delete 적용하기"
# beforetoc: "MySQL id컬럼의 data type에 대하여"
toc: true
featured: false
hidden: false
# rating: 3
---

prisma soft delete 적용하기

# [prisma] soft delete 적용

## 1. 상황 및 원인

Prisma를 사용하여 백엔드 서버를 마이그레이션 중이다.\
기존에 사용하던 ORM인 sequielize에는 delete 관련 Column이 있을 경우, sequelize 설정으로 간단하게 soft delete를 적용시킬 수 있었다.(typeORM도 된다.)\
그러나, Prisma에는 그런 기능이 없다.(이외에도 자잘하게 아쉬운 부분들이 꽤 있다..)

### 그럼에도 Prisma를 사용하고 있는 이유

1. Node.js 와 TypeScript 를 위한 Auto-generated & Type-safe 한 Querybuilder 제공\
   1-1. prisma client 생성 시, model에 대한 schema와 type들을 완벽하게 인식하여 type 안정성이 높음\
   1-2. 기존 DB를 사용하기 위한 간편한 Introspect 기능 제공\
   1-3. prisma generate로 model 선언 불필요
2. 여러 개의 prisma client를 활용하여 다수의 DB 작업 가능
3. GUI Database Tool(Prisma Studio) 제공

(자세한 이유와 Prisma에 관한 내용은 다음에..)

### Prisma Soft Delete 적용 이유

prisma는 soft delete를 지원하지 않으나, 우리 서비스에서는 soft delete를 적용하고 있으므로 사용해야 했다.\
soft delete의 세부 동작은 삭제 동작 시, delete 관련 coulmn을 update하는 방식이다.\
따라서, 비지니스 로직 중 삭제 로직은 delete column을 update하는 방식으로 구현하고 있었다.\
이런 방식의 문제는 다음과 같다.

1. 삭제 행위임에도 prisma opretaion은 update라는 mismatch 현상
2. data model의 delete column의 유무에 따라 operation이 달라짐

따라서, delete column이 존재할 경우, 자동으로 delete column을 update하도록 middleware를 적용시켰다.

## 2. 방안

### 2-1. prisma Middleware 구현

다음과 같이 코드를 구현하였다.

```typescript
this.$use(async (params, next) => {
  if (prismaClient.Prisma[`${params.model}ScalarFieldEnum`]["deletedAt"]) {
    const koNow = dayjs.utc().add(9, "hour").toDate();
    if (params.action === "delete") {
      params.action = "update";
      params.args["data"] = {
        deletedAt: koNow
      };
    } else if (params.action === "deleteMany") {
      params.action = "updateMany";
      if (params.args.data !== undefined) {
        params.args.data["deletedAt"] = koNow;
      } else {
        params.args["data"] = {
          deletedAt: koNow
        };
      }
    }
  }
  return next(params);
});
```

2L 에서 prisma 동작 대상 model에 deletedAt이라는 column이 포함되어 있는 경우를 확인하고, delete와 deleteMany operation을 update, updateMany로 변경시켜준다.

### 2-2. 위 방식의 문제점

1. prisma operation으로 hard delete(DB row 제거)가 불가능하다.
2. soft deleted된 data를 다시 soft delete하여도 error가 발생하지 않는다.(deletedAt coulmn을 update하는 행위이므로)

1번은 raw query를 작성하여 해결하고,\
2번은 soft delete 전에 해당 data가 soft deleted 되었는지 확인 후 실행하도록 로직을 구성해야 한다.

2번의 경우, 미들웨어를 사용하지 않더라도 발생하는 문제이기에 위 방식만의 문제라고는 볼 수 없다.

### 3. 정리

1번 문제의 경우를 잘 생각하여 미들웨어를 통해 자동으로 변환할지 잘 판단하여 적용해야 할 것 같다.

> 참고자료
>
> [프리즈마 공식문서](https://www.prisma.io/docs/)\
> [프리즈마 공식문서 - soft-delete-middleware](https://www.prisma.io/docs/concepts/components/prisma-client/middleware/soft-delete-middleware)\
> [Blausee blog](https://wwlee94.github.io/category/blog/performance-comparison-prisma-typeorm/#prisma-%EC%99%80-typeorm-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90)
