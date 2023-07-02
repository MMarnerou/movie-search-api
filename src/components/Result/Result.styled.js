import styled from "styled-components";
import { Tag as PrimeTag } from "primereact/tag";

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px;
`;

export const ImgBlock = styled.img`
  :hover {
    box-shadow: 1px 2px 3px 4px #f1f1f5;
    cursor: pointer;
  }
`;

export const ResultText = styled.p`
  display: flex;
  align-items: flex-start;
  width: 200px;
  justify-content: space-between;
`;

export const Tag = styled(PrimeTag)`
  .p-tag {
    background: blueviolet;
    color: #ffffff;
    font-size: 0.75rem;
    margin-left: 6px;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
  }
`;
