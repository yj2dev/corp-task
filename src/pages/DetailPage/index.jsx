import { Container } from "./styled";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Octokit } from "octokit";
import dayjs from "dayjs";

const DetailPage = () => {
  const { number } = useParams();

  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const getDetailIssue = async (owner, repo, number) => {
    return await octokit.paginate(
      `GET /repos/${owner}/${repo}/issues`,
      {
        owner: "github",
        repo: "docs",
        per_page: 5,
      },
      (response, done) =>
        response.data.map((issue) => {
          done();

          return issue;

          return {
            title: issue.title,
            number: issue.number,
            comments: issue.comments,
            writer: issue.user.login,
            createdAt: dayjs(issue.created_at).format(`YYYY년 M월 D일`),
          };
        }),
    );
  };

  useEffect(() => {
    console.log("number >> ", number);
    const runGetDetailIssue = async () => {
      const issueData = await getDetailIssue("facebook", " react", number);
      console.log("issueData >> ", issueData);
    };

    runGetDetailIssue();
  }, []);

  return <Container>DetailPage</Container>;
};

export default DetailPage;
