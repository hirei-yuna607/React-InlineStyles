/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const ContainerStyle = css`
    border: solid 1px #392eff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const TitleStyle = css({
    margin: "0",
    color: "#ffe000"
  });

  return (
    <div css={ContainerStyle}>
      <p css={TitleStyle}>Emotion</p>
      <SButtonStyle>OK</SButtonStyle>
    </div>
  );
};

const SButtonStyle = styled.button`
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
