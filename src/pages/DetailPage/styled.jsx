import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  li {
    list-style: none;
  }

  button.back-btn {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: -58px;
    left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  article.summary {
    display: flex;
    align-items: center;

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
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;
