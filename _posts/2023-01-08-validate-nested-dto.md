---
layout: post
title: "[NestJS] TypeScript(NestJS)에서 중첩 객체 유효성 검사하기"
author: isthis
categories: [issue, nestjs]
tags: [backend, nestjs, typescript]
image: assets/images/validate-nested-error-1.png
description: "TypeScript(NestJS)에서 중첩 객체 유효성 검사하기"
toc: true
featured: true
hidden: false
---

TypeScript(NestJS)에서 중첩 객체 유효성 검사하기

### 1. 상황

Nest app의 DTO에서 class-validator와 class-transformer를 통해 validation을 하고 있었다.\
`@Transform`과 `@Type`, `@ValidateNested`를 통해 중첩 객체의 유효성 검사를 하려 했으나, 정상적으로 동작하지 않고 다음과 같은 에러가 발생했다.

<figure><img src="../../assets/images/validate-nested-error-1.png" alt=""><figcaption></figcaption></figure>

### 2. 원인

`@ValidateNested`를 통해 검사를 하기 위해서는 해당 클래스의 인스턴스로 변환해 주어야 했다.\
왜 리터럴 객체가 아닌 클래스의 인스턴스로 변환해야 하는지, 왜 클래스의 인스턴스를 사용하는지에 대한 이유는 다음 링크를 참고하자.\
[기억보단 기록을][1](god 블로그..)

간단하게만 정리해보자면, 코드의 응집력을 높이기 위해서다.\
OOP, 도메인 기반의 Entity 설계등을 할 때는 객체에 책임을 줌으로써 응집력을 높인다.\
여기서 객체에 책임을 준다는 것은, 리터럴 객체로 두는 것이 아니라 클래스의 인스턴스로 변환하는 것을 말한다.\
클래스의 인스턴스로 변환하고, 해당 클래스에 값을 가공하는 로직을 두어, 상태와 행위가 한 곳에 있는 응집력 있는 코드를 생성할 수 있다.

### 3. 방안

#### 3.1. 기본적인 중첩 객체 검사 방법

기본적으로 중첩 객체를 검사하기 위해서는 다음과 같이 작성해준다.

<figure><img src="../../assets/images/validate-nested-3.png" alt=""><figcaption></figcaption></figure>

하나씩 확인해보자.\
`@ValidateNested()`를 통해 중첩 객체인 chapters의 유효성을 검사한다.\
중첩 객체가 배열이므로 option에 `{each: true}`를 작성하여 요소별로 검사하도록 해주었다.\
추가로, 중첩된 객체를 검증할 때는 `@Type`을 통해 리터럴 객체를 해당 클래스의 인스턴스로 변환을 해주어야 한다.

#### 3.2. 문제점

하지만, 나의 경우 form-data로 전송되어 넘어온 data type이 문자열이었다.\
따라서, 다음 사진과 같이 `@Transform()`을 통해 리터럴 객체로 parsing 후, `@Type`으로 변환을 시도하였으나, 정상적으로 동작하지 않았다.

<figure><img src="../../assets/images/validate-nested-4.png" alt=""><figcaption></figcaption></figure>

`@Transform()`과 `@Type()`의 실행 순서가 어떻게 되는지 정확히 알지 못하나, 동시에 적용은 불가능 한 것으로 보인다.

#### 3.3. 해결 방법

이럴 때 두 가지를 동시에 할 수 있는 방법이 존재한다.\
class-transformer에서 `plainToInstance` 함수를 불러온 후, 다음과 같이 코드를 작성해준다.

<figure><img src="../../assets/images/validate-nested-2.png" alt=""><figcaption></figcaption></figure>

`JSON.parse()`를 통해 JSON 문자열에서 리터럴 객체로 변환한 값을 `plainToInstance` 함수에 넣어준다. 그러면 문자열에서 클래스의 인스턴스로 변환이 완료된다.\
위와 같이 작성하여 성공적으로 중첩 객체의 유효성 검사가 가능했다.

### 4. 정리

`@ValidateNested`를 통해 검사를 하기 위해서는 해당 클래스의 인스턴스여야 한다는 사실을 몰라서 많이 해맸다.\
리터럴 객체로만 변환해놓고 왜 `@ValidateNested`가 제대로 동작이 안 되는지 이해가 되지 않았다.\
공식 문서와 검색을 통해 공부하여 인스턴스 상태가 되어야 검사가 된다는 것을 알았고, 그제서야 해결할 수 있었다.\
역시 문제가 생겼을 때 정확하고 시원하게 해결하기 위해서는 문제의 원인이 되는 것에 대해 자세히 공부해야 한다는 사실을 다시금 느낄 수 있었다.

> 참고 자료
>
> [class-transformer](https://github.com/typestack/class-transformer)\
> [Validating nested objects with class-validator in NestJS](https://dev.to/avantar/validating-nested-objects-with-class-validator-in-nestjs-1gn8)

[1]: https://jojoldu.tistory.com/617
