import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});
const Description_ = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0px;
  text-align: left;
  height: 40%;
  color: ${textColor};
  transition: all 0.2s ease-out;

  & * {
    color: ${textColor};
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 170px) {
    font-size: 1.2rem;
  }
`;

const Description = (props) => {
  const description = useSelector(
    (state) => state.projectsReducer[props.id].desc
  );
  return <Description_>{description}</Description_>;
};

export default Description;
