import * as Styled from "./Results.styled";
import React from "react";
import Result from "../Result/Result";
import { Tag } from "primereact/tag";

const Results = ({ results = [] }) => {
  return (
    <Styled.Results>
      <Styled.Title>
        All Results <Tag title="">{results.length}</Tag>
      </Styled.Title>
      {results.length > 0 ? (
        <Styled.ResultsContainer>
          {results.map((item, index) => {
            return (
              item.Poster &&
              item.Poster !== "" && <Result key={index} item={item} />
            );
          })}
        </Styled.ResultsContainer>
      ) : (
        <Styled.NoResultsContainer>No movies found</Styled.NoResultsContainer>
      )}
    </Styled.Results>
  );
};

export default Results;
