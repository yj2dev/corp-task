import { Container } from "./styled";
import { Link, useNavigate } from "react-router-dom";

const Summary = ({ issue, index }) => {
  const navigate = useNavigate();

  return (
    <>
      {issue?.type === "post" ? (
        <Container
          key={index}
          onClick={() => {
            navigate(`/detail/facebook/react/${issue.number}`);
          }}
        >
          <>
            <span className="title">
              #{issue.number}&nbsp;{issue.title}
              <p className="meta">
                작성자:&nbsp;{issue.writer.name}, 작성일:&nbsp;{issue.createdAt}
              </p>
            </span>
            <span className="comments">코멘트:&nbsp;{issue.comments}</span>
          </>
        </Container>
      ) : (
        <Container>
          <div className="ad">
            <Link to="https://www.wanted.co.kr">
              <img src="img/ad.jpg" alt="원티드 광고 배너" />
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default Summary;
