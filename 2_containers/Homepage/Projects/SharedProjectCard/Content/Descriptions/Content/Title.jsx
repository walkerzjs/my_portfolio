import React from "react";
import styled from "styled-components";
import { useSelector,shallowEqual } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--black)",
  dark: "var(--white)",
});

const Title_ = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  margin-top: 3rem;
  color: ${textColor};
  transition: all 0.2s ease-out;
  display: block;
  height: 20%;
  padding-bottom: 6rem;
  @media (max-width: 280px) {
    font-size: 1.5rem;
  }
  @media (max-width: 170px) {
    font-size: 1.2rem;
  }
`;

const Title = (props) => {
  const title = useSelector((state) => state.projectsReducer[props.id].title

  );

  return <Title_>{title}</Title_>;
};

export default Title;
