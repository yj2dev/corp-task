import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import Summary from "../../components/Summary";
import { Container } from "./styled";
import { Octokit } from "octokit";
import dayjs from "dayjs";
import { PulseLoader } from "react-spinners";

const ListPage = () => {
  const [list, setList] = useState([]);
  const listCntRef = useRef(10);
  const [issueRef, issueViewRef] = useInView();

  const [scrollLoading, setScrollLoading] = useState(false);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  const getIssue = async (owner, repo) => {
    const response = await octokit.paginate(
      `GET /repos/${owner}/${repo}/issues?state=open&sort=comments`,
      { per_page: listCntRef.current },
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

  const setAd = (issueData, index = 5) => {
    issueData.splice(index - 1, 0, { type: "ad" });
    return issueData;
  };

  const runGetIssue = async () => {
    let issueData = await getIssue("facebook", "react");
    issueData = setAd(issueData);
    setList(issueData);
  };

  const getMoreIssue = async () => {
    setScrollLoading(true);
    listCntRef.current += 10;
    await runGetIssue();
    setScrollLoading(false);
  };

  useEffect(() => {
    runGetIssue();
  }, []);

  useEffect(() => {
    if (issueViewRef) {
      getMoreIssue();
    }
  }, [issueViewRef]);

  return (
    <Container>
      <ul>
        {list?.map((issue, index) => (
          <Summary issue={issue} key={index} />
        ))}
      </ul>
      <span className="infinity-scroll-ref" ref={issueRef}>
        {scrollLoading && (
          <PulseLoader size={12} style={{ margin: "12px 0" }} />
        )}
      </span>
    </Container>
  );
};

export default ListPage;
