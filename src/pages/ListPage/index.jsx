import { Container } from "./styled";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import dayjs from "dayjs";
import Summary from "../../components/Summary";

const ListPage = () => {
  const [list, setList] = useState([]);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const getIssue = async (owner, repo) => {
    const response = await octokit.paginate(
      `GET /repos/${owner}/${repo}/issues`,
      { per_page: 5 },
      (response, done) =>
        response.data.map((issue) => {
          done();

          return {
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

  useEffect(() => {
    const runGetIssue = async () => {
      const issueData = await getIssue("facebook", "react");
      setList(issueData);

      console.log("issueData >> ", issueData);
    };

    runGetIssue();
  }, []);

  return (
    <Container>
      <ul>
        {list?.map((issue, index) => (
          <Summary issue={issue} key={index} />
        ))}
      </ul>
    </Container>
  );
};

export default ListPage;
