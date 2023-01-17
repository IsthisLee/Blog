---
layout: post
title: "[GIT] git the requested URL returend error : 403 해결"
author: isthis
categories: [개발, issue, git]
tags: [git, issue]
image: assets/images/13.jpg
description: "git the requested URL returend error : 403 해결하기"
# beforetoc: "MySQL id컬럼의 data type에 대하여"
toc: true
featured: false
hidden: false
# rating: 3
---

git the requested URL returend error : 403 해결

### 1. 상황

새로운 Git Repository 생성하고 다음과 같은 가이드에 따라 소스코드 푸쉬하는 도중 발생.

```
echo "# -" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/IsthisLee/-.git
git push -u origin main
```

git push -u origin main 시, 403 에러가 발생함.

`Unable to access 'https://github.com/github_id/git_reposit_name.git'/ The requested URL returned error: 403`

위 문구 발생.

### 2. 원인

원격 저장소에 권한이 없어서 접근을 못함. 따라서 소스 코드를 푸쉬할 수 없다.

### 3. 방안

인증을 통하여 해결

#### 3.1. 인증

- `git remote set-url origin https://github-username@github.com/github-username/github-repository-name.git` 입력
- 처음에 git remote add origin git*reposit*주소.git 을 통해 origin 명칭을 만들었지만, 해당 주소에 대한 권한이 없어서 푸쉬를 할 때 에러가 발생한 것.

#### 3.2. 소스코드 푸시

- 터미널에 git push -u origin master 입력
- 깃헙 패스워드 입력을 하라는 창이 나오고 입력 시 정상 푸시됨.
- 최초 인증 이후부터는 git push만 하면 기존의 세팅한 주소로 바로 푸시됨.

> 참고자료
>
> [언젠간 되어있겠지](https://beagle-dev.tistory.com/244)
