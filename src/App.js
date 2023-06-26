import * as Styled from "./App.styled.js";
import React, { useState } from "react";
import Search from "./components/Search/Search.js";
import Results from "./components/Results/Results.js";
import TopResults from "./components/TopResults/TopResults.js";
import Loader from "./components/Loader/Loader";

const MOVIE_API_PATH = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const search = (text) => {
    setLoading(true);
    setSearchValue(text);
    setErrorMessage(null);
    fetch(`${MOVIE_API_PATH}${text}`)
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
      <Search search={search} loading={loading} />
      {searchValue && (
        <>
          {loading ? (
            <Loader />
          ) : (
            <Styled.AppBody>
              <TopResults
                loading={loading}
                results={results && results.slice(0, 3)}
                errorMessage={errorMessage}
              ></TopResults>
              <Results
                loading={loading}
                results={results}
                errorMessage={errorMessage}
              />
            </Styled.AppBody>
          )}
        </>
      )}
    </Styled.App>
  );
};

export default App;
