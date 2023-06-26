import * as Styled from "./TopResults.styled";
import React from "react";
import Result from "../Result/Result";

const TopResults = ({ results = [] }) => {
  return (
    <>
      {results.length > 0 && (
        <Styled.TopResults>
          <Styled.Title>Top {results.length} Results</Styled.Title>
          <Styled.TopResultsContainer>
            {results.map((item, index) => {
              return <Result key={index} item={item} />;
            })}
          </Styled.TopResultsContainer>
        </Styled.TopResults>
      )}
    </>
  );
};

export default TopResults;
