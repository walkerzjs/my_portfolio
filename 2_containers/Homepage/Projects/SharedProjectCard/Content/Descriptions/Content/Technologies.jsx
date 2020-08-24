import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});
const Technologies_ = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0px;
  text-align: left;
  height: 40%;
  color: ${textColor};
  transition: all 0.2s ease-out;

  & * {
    color: ${textColor};
    transition: all 0.2s ease-out;
  }
  @media (max-width: 280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 170px) {
    font-size: 1.2rem;
  }
`;

const Technologies = (props) => {
  const tech = useSelector(
    (state) => state.projectsReducer[props.id].Technologies
  );
  return <Technologies_>{tech}</Technologies_>;
};

export default Technologies;
