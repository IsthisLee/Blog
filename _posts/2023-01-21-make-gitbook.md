---
layout: post
title: "[GitBook] CLI로 GitBook 생성하기"
author: isthis
categories: [개발, blog]
tags: [blog, gitbook]
image: assets/images/GitBook.png
description: "GitBook CLI를 통하여 GitBook page 만들기"
toc: true
featured: true
hidden: false
---

GitBook CLI를 통하여 GitBook page를 만들어보자

### GitBook 생성 방법

GitBook Page를 생성하는 방법에는 두 가지가 있다.

1. [GitBook 공식 홈페이지](https://www.gitbook.com/)

   위의 공식 홈페이지에 들어가면 GUI를 통해 만들 수 있다. 생성 방법은 어렵지 않고 시키는 대로 하면 된다.(따라서 해당 방법은 생략)

2. GitBook CLI 사용

   공식 홈페이지를 통해 생성할 경우, 유료 플랜을 사용하지 않으면 여러가지 기능 제한이 있다. 디자인 커스텀이나 댓글 등의 기능이 제한되어 있다. 하지만, GitBook CLI를 통해 생성한다면 다양한 커스텀이 가능하다.

하지만 주의할 사항..\
현재 GitBook CLI의 경우, 2017년이 마지막 업데이트로 더 이상 운영을 하지 않는 것으로 보인다. 또한, 디자인이나 SEO가 공식 홈페이지를 통해 만든 것이 깔끔하다.\
따라서 돈을 쓰고싶지 않고 무료 플랜에 없는 기능을 붙이고 싶은 경우가 아니면, 공식 홈페이지를 통해 생성하는 것이 더 좋을 것으로 보인다.

### GitBook CLI로 생성하기

#### 생성

1. 노드 버전을 12 버전으로 설정

   앞에서 말했듯이 gitbook-cli는 오랫동안 업데이트가 안 되었다. 따라서 노드 14 초과 버전은 에러가 발생하므로 14버전으로 변경해주자.(mac m1은 12버전) nvm 또는 g를 사용하여 버전 변경이 가능하다. nvm의 경우 `nvm use 14` 커맨드로 노드 버전을 낮춰주자.

2. gitbook-cli 설치

   `npm install gitbook-cli -g` 커맨드 입력

3. 초기 설정 + 에러 해결

   1. 새로운 폴더를 만들고, 해당 폴더에서 `gitbook init` 커맨드 입력

   2. 아마 다음과 같은 에러와 마주쳤을 것이다.

      ```
      if (cb) cb.apply(this, arguments)

      TypeError: cb.apply is not a function
      ```

      gitbook-cli에서 사용한 패키지에 문제가 있어서 그렇다.\
      아래와 같이 해당 패키지를 에러 안나는 버전으로 업데이트 해주자.

   3. 해당 패키지 설치 폴더로 이동한다.

      `cd ~/.nvm/versions/node/v12.22.12/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/`

   4. 문제되는 패키지 업그레이드

      `npm i graceful-fs@4.2.0`

   5. 기존 폴더로 돌아가서 다시 `gitbook init`을 입력한다.

4. 서버 실행

   `gitbook serve`를 입력하면 `localhost:4000`으로 접속이 가능하다.

5. 커스텀하기

   커스텀을 위해서는 플러그인을 설치해주면 된다.\
   예를 들어, DISQUS라는 써드파티 프로그램을 통해 댓글 기능을 붙이려면, root 폴더에 book.json 파일을 생성하고 다음과 같이 설정해주면 된다.\
   pluginsConfig의 disqus 값은 disqus에 들어가서 본인 주소를 생성하고 해당 값을 넣어주자.

   ```
   {
    "plugins": [
      "disqus",
    ],
    "pluginsConfig": {
      "disqus": {
        "shortName": "[MyName]"
      },
    }
   ```

6. 커스텀 적용

   `gitbook install` 커맨드를 입력하여 플러그인을 받아주면 적용 완료.

#### 배포 방법

1. gitbook install
2. gitbook build ./ —log=debug —debug
3. cp -r ./\_book/gitbook .

   - 커맨드 설명

     폴더들을 제귀적으로 복사(깊은 복사)해준다. 파일 소유자와 퍼미션까지 동일하려면 -a 옵션을 붙여주자.

4. git clean -fx ./\_book

   - 커맨드 설명

     git Untracked 상태의 파일들을 삭제한다.\
     (-x 옵션으로 .gitignore 파일에 포함된 파일도 삭제한다.)\
     (-d 옵션 추가 안 했으므로 디렉터리는 제거되지 않는다.)

5. git add .
6. git commit -m "commit msg"
7. git push origin gh-pages

#### 글 작성 방법

1. 초기 설정 시 README.md, SUMMARY.md 파일 생성된다.
2. SUMMARY.md에 페이지 목차를 설정할 수 있다.
3. 별도 폴더 생성해서 마크다운 페이지 생성한다.
4. 해당 페이지에 글 작성 및 목차를 반영한다.

만약, github의 README와 gitbook의 README를 다르게 설정하고 싶다면, book.json에 다음 설정을 추가하자.

```
"structure": {
    "readme": "README.md"
  }
```

gitbook에 표시될 README를 지정할 수 있다.

> 참고 자료
>
> [gitbook manual](https://tinydew4.gitbooks.io/gitbook/content/ko/)\
> [soopsaram](https://velog.io/@soopsaram/gitbook)\
> [내실내놀 개발자](https://vroomfan.tistory.com/50)\
> [기억보단 기록을](https://jojoldu.tistory.com/598)
