import styled from "styled-components";

export const Container = styled.li`
  flex: 1;
  margin: 0 20px;
  padding: 12px 0;
  font-size: 1.2rem;
  list-style: none;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  span.title {
    p.meta {
      margin: 0;
      font-size: 0.8rem;
    }
  }
  span.comments {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
