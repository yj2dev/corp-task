import styled from "styled-components";

export const Container = styled.div`
  article.summary {
    img {
      width: 48px;
      height: 48px;
    }
  }

  article.content {
    padding: 24px 12px 12px 12px;
    white-space: pre-wrap;
    overflow: hidden;
    //Q1. 라이브러리를 써서 발생한 문제는 어디를 확인해야 하나요? 글자가 넘침
    //A1.
  }
`;
