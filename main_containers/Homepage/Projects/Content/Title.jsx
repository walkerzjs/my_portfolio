import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});
const Title_ = styled.h1`
  font-size: 2.7rem;
  color: ${textColor};
  transition: all 0.2s ease-out;
`;

const Title = (props) => {
  return <Title_>Recent Projects</Title_>;
};
export default Title;
