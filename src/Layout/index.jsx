import Header from "./Header";
import { Container } from "./styled";

// Q1. 구조분해 할당을 쓰는 특별한 경우가 있나요?
//     EX. axios 요청 이후 response 대신에 { data }
// A1.
const Layout = ({ children }) => {
  const owner = "facebook";
  const repo = "react";

  return (
    <Container>
      <Header owner={owner} repo={repo} />
      {children}
    </Container>
  );
};

export default Layout;
