import dayjs from "dayjs";
// import { Octokit } from "octokit";
import axios from "axios";

export const getIssue = async (owner, repo, pageCnt) => {
  /*
    설명: 깃허브 이슈 목록을 요청하는 함수
    작성자: 이유진
    작성일: 2024.04.16 00:21
   */

  return (
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
        params: {
          state: "open",
          sort: "comments",
          per_page: pageCnt,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      })
      //   Q2. 구조분해할당은 취향차이인가? 실서비스 운영중 안정성에 영향을 끼치지 않는가?
      //   A2.
      .then(({ data }) => {
        console.log(data);
        return data.map((issue) => ({
          type: "post",
          title: issue.title,
          number: issue.number,
          comments: issue.comments,
          writer: { name: issue.user.login },
          createdAt: dayjs(issue.created_at).format(`YYYY년 M월 D일`),
        }));
      })
      .catch((err) => {
        console.error(err);
      })
  );
};

export const getDetailIssue = async (owner, repo, issueNumber) => {
  /*
  설명: 깃허브 이슈 게시물에 대한 상세 정보를 요청하는 함수
  작성자: 이유진
  작성일: 2024.04.16 00:22
   */

  return axios
    .get(
      `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      },
    )
    .then(({ data }) => {
      return {
        type: "post",
        title: data.title,
        content: data.body,
        number: data.number,
        comments: data.comments,
        writer: { name: data.user.login, profileUrl: data.user.avatar_url },
        createdAt: dayjs(data.created_at).format(`YYYY년 M월 D일`),
      };
    })
    .catch((err) => console.error(err));
};
