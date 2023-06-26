import * as Styled from "./App.styled.js";
import { Header } from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search.js";
import Results from "./components/Results/Results.js";

const MOVIE_API_PATH = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(`${MOVIE_API_PATH}man`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setResults(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`${MOVIE_API_PATH}${searchValue}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setResults(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <Styled.App>
      <Header />
      <Search search={search} />
      <Results
        loading={loading}
        results={results}
        errorMessage={errorMessage}
      />
    </Styled.App>
  );
};

export default App;
