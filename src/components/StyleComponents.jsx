import styled from "styled-components";

export const StyleComponents = () => {
  return (
    <SContainer>
      <SPage>Style Components</SPage>
      <SButton>OK</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #392eff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SPage = styled.p`
  margin: 0;
  color: #ffe000;
`;

const SButton = styled.button`
  background: #ff0000;
  border: none;
  color: #ffffff;
  padding: 6px;
  margin: 6px;
  border-radius: 10px;
  &:hover {
    background-color: #46cdcf;
    color: #000000;
    cursor: pointer;
  }
`;
