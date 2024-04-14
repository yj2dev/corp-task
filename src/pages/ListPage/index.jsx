import { Container } from "./styled";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();

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
          <li
            key={index}
            onClick={() => {
              navigate(`/detail/facebook/react/${issue.number}`);
            }}
          >
            <span className="title">
              #{issue.number}&nbsp;{issue.title}
            </span>
            <span className="meta">
              작성자:&nbsp;{issue.writer.name}, 작성일:&nbsp;{issue.createdAt}
            </span>
            <span>코멘트:&nbsp;{issue.comments}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ListPage;
