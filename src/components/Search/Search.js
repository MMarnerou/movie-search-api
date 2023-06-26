import React, { useState } from "react";
import * as Styled from "./Search.styled.js";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const Search = ({ search, loading }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <Styled.Search>
      <span className="p-input-icon-right">
        {loading && <i className="pi pi-spin pi-spinner" />}
        <InputText
          onChange={handleSearchInputChanges}
          value={searchValue}
          placeholder="Search for a movie"
        />
      </span>
      <Button
        icon="pi pi-search"
        severity="info"
        aria-label="Search"
        onClick={callSearchFunction}
      />
    </Styled.Search>
  );
};

export default Search;
