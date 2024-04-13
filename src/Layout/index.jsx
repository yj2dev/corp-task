import Header from "./Header";
import { Container } from "./Header/styled";

// Q1. 구조분해 할당을 쓰는 특별한 경우가 있나요?
// A1.
const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
