import styled from "styled-components";

export const Container = styled.div`
  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 0 20px;
      padding: 12px 0;
      list-style: none;
      border-bottom: 1px solid gray;
    }

    li:last-child {
      border-bottom: none;
    }
  }
`;
