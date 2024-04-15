import dayjs from "dayjs";
import { Octokit } from "octokit";

export const getIssue = async (owner, repo, pageCnt = 10) => {
  /*
    설명: 깃허브 이슈 목록을 요청하는 함수
    작성자: 이유진
    작성일: 2024.04.16 00:21
   */

  //   Q1. 중복 코드 해결을 위해 TOKEN 코드를 다른 모듈에서 관리해야할까요?
  //   A1.
  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const response = await octokit.paginate(
    `GET /repos/${owner}/${repo}/issues?state=open&sort=comments`,
    { per_page: pageCnt },
    (response, done) =>
      response.data.map((issue) => {
        done();

        return {
          type: "post",
          title: issue.title,
          number: issue.number,
          comments: issue.comments,
          writer: { name: issue.user.login },
          createdAt: dayjs(issue.created_at).format(`YYYY년 M월 D일`),
        };
      }),
  );

  return response;
};

export const getDetailIssue = async (owner, repo, issueNumber) => {
  /*
  설명: 깃허브 이슈 게시물에 대한 상세 정보를 요청하는 함수
  작성자: 이유진
  작성일: 2024.04.16 00:22
   */
  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const response = await octokit.request(
    `GET /repos/${owner}/${repo}/issues/${issueNumber}`,
  );
  const issue = response.data;

  return {
    type: "post",
    title: issue.title,
    content: issue.body,
    number: issue.number,
    comments: issue.comments,
    writer: { name: issue.user.login, profileUrl: issue.user.avatar_url },
    createdAt: dayjs(issue.created_at).format(`YYYY년 M월 D일`),
  };
};
