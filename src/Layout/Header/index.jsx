import { Container } from "./styled";

const Header = ({ owner, repo }) => {
  return (
    <Container>
      {owner} / {repo}
    </Container>
  );
};

export default Header;
