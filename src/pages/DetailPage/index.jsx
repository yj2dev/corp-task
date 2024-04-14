import { Container } from "./styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import dayjs from "dayjs";
import Markdown from "react-markdown";

const DetailPage = () => {
  const { owner, repo, number } = useParams();
  const [issue, setIssue] = useState(null);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const getDetailIssue = async (owner, repo, issueNumber) => {
    const response = await octokit.request(
      `GET /repos/${owner}/${repo}/issues/${issueNumber}`,
    );
    const issue = response.data;

    return {
      title: issue.title,
      content: issue.body,
      number: issue.number,
      comments: issue.comments,
      writer: { name: issue.user.login, profileUrl: issue.user.avatar_url },
      createdAt: dayjs(issue.created_at).format(`YYYY년 M월 D일`),
    };
  };

  useEffect(() => {
    const runGetDetailIssue = async () => {
      const issueData = await getDetailIssue("facebook", "react", number);

      setIssue(issueData);
    };

    runGetDetailIssue();
  }, []);

  return (
    <Container>
      <article className="summary">
        <img src={issue.writer.profileUrl} alt="이슈 작성자 프로필 이미지" />
      </article>
      <article className="content">
        <Markdown>{issue?.content}</Markdown>
      </article>
    </Container>
  );
};

export default DetailPage;
