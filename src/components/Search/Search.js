import React, { useState } from "react";
import * as Styled from "./Search.styled.js";
const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <Styled.Search>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="search"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </Styled.Search>
  );
};

export default Search;
