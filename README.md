## 깃허브 이슈 조회
- 깃허브 이슈를 조회하는 서비스 입니다.
## 개발 기간
- 24.04.15 ~ 16, 23(3일)
## 개발 인원
- 개인
## 실행 방법
1. GITHUB API 접근 키(토큰) 발급
   - <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens">참고 사이트</a>
2. 최상위 폴더에 .env 파일 생성 후 REACT_APP_GITHUB_TOKEN={발급받은 토큰} 형식으로 작성
3. 콘솔에 ```npm i``` 로 필요한 패키지 설치
4. ```npm start``` 프로젝트 실행
## 구현 내용
### 1. 이슈 조회 페이지
- 반응형 디자인
- 목록 사이에 광고 삽입
- 무한 스크롤
- 이슈 오픈중, 댓글순 내림차순 정렬
### 2. 이슈 상세 페이지
- 마크다운 뷰어로 가독성 향상
### 시연 영상
![기업과제1 시연-2](https://github.com/yj2dev/git-issue-check/assets/72322679/2712ad6b-ffd1-412f-a70b-0a907ce60cfc)
