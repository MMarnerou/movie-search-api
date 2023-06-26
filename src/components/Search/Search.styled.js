import styled from "styled-components";

export const Search = styled.form`
  margin: 0 0 40px 0;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  width: 100%;

  &input[type="search"]::-webkit-search-cancel-button {
    background-color: red;
    outline: 1px solid red;
    border: 1px solid red;
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  .input::-webkit-search-cancel-button:after {
    content: "✖️";
    color: green;
    position: absolute;
    top: 50%;
    left: 50%;
    tranform: translate(-50%, -50%);
  }
`;
