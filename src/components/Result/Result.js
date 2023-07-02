import * as Styled from "./Result.styled";
import React from "react";

const Result = ({ item }) => {
  const handleOnClick = () => {
    console.log(item);
    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${item.imdbID}`;
    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          window.open(jsonResponse.Poster, "_blank");
        }
      });
  };

  return (
    <Styled.Result onClick={() => handleOnClick()}>
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
