import styled from "styled-components";

export const Results = styled.div``;

export const ResultsContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
