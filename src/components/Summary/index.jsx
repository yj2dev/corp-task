import { Container } from "./styled";
import { useNavigate } from "react-router-dom";

const Summary = ({ issue, index }) => {
  const navigate = useNavigate();

  return (
    <Container
      key={index}
      onClick={() => {
        navigate(`/detail/facebook/react/${issue.number}`);
      }}
    >
      <span className="title">
        #{issue.number}&nbsp;{issue.title}
        <p className="meta">
          작성자:&nbsp;{issue.writer.name}, 작성일:&nbsp;{issue.createdAt}
        </p>
      </span>
      <span className="comments">코멘트:&nbsp;{issue.comments}</span>
    </Container>
  );
};

export default Summary;
