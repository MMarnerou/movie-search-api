import * as Styled from "./Result.styled";
import React from "react";

const Result = ({ item }) => {
  return (
    <Styled.Result>
      <Styled.ImgBlock
        width="200"
        height="250px"
        alt={`The movie titled: ${item.Title}`}
        src={item.Poster}
      />
      <Styled.ResultText>
        {item.Title} {"-"} {item.Year}
        <Styled.Tag title={item.Type}>{item.Type}</Styled.Tag>
      </Styled.ResultText>
    </Styled.Result>
  );
};

export default Result;
