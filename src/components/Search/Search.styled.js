import styled from "styled-components";

export const Search = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;

  &input[type="search"]::-webkit-search-cancel-button {
    color: green;
    background-color: red;
    outline: 1px solid red;
    border: 1px solid red;
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    /* 	position: absolute;
	right: 0; */
    border-radius: 50%;
  }

  .input::-webkit-search-cancel-button:after {
    content: "✖️";
    color: green;
    /* 	outline: 1px solid red; */
    /* 	border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
    tranform: translate(-50%, -50%);
  }
`;
