import styled from "styled-components";
export const Loader = styled.div`
  border: 10px solid #fff;
  border-top: 10px #118ece solid;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
