import * as Styled from "./Results.styled";
import React from "react";
import Result from "../Result/Result";

const Results = ({ loading, errorMessage, results = [] }) => {
  return (
    <Styled.Results>
      {loading && !errorMessage ? (
        <span>Please wait...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        results.map((item, index) => <Result key={index} item={item} />)
      )}
    </Styled.Results>
  );
};

export default Results;
