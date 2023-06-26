import * as Styled from "./Result.styled";
import React from "react";

const Result = ({ item }) => {
  const poster = item.Poster;
  return (
    <Styled.Result>
      <h2>{item.Title}</h2>
      <div>
        <img width="200" alt={`The movie titled: ${item.Title}`} src={poster} />
      </div>
      <p>{item.Year}</p>
    </Styled.Result>
  );
};

export default Result;
