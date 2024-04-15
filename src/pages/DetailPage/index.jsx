import { Container, LoadingContainer } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import dayjs from "dayjs";
import Markdown from "react-markdown";
import { PulseLoader } from "react-spinners";
import { IoArrowBack } from "react-icons/io5";
import Summary from "../../components/Summary";
import { useDetailIssue } from "../../hooks/useDetailIssue";

const DetailPage = () => {
  const { owner, repo, number } = useParams();
  const navigate = useNavigate();

  const [issue, runGetDetailIssue] = useDetailIssue();

  useEffect(() => {
    runGetDetailIssue(owner, repo, number);
  }, []);

  return (
    <Container>
      {issue ? (
        <>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <IoArrowBack />
          </button>
          <article className="summary">
            <img
              src={issue?.writer?.profileUrl}
              alt="이슈 작성자 프로필 이미지"
            />
            <Summary issue={issue} />
            <li></li>
          </article>
          <article className="content">
            <Markdown>{issue?.content}</Markdown>
          </article>
        </>
      ) : (
        <LoadingContainer>
          <PulseLoader color="#000" size={10} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default DetailPage;
