import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title_ = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  margin-top: 3rem;

  display: block;
  height: 20%;
  padding-bottom: 6rem;
  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 170px) {
    font-size: 1.2rem;
  }
`;

const Title = (props) => {
  const title = useSelector((state) => state.projectsReducer[props.id].title);

  return <Title_>{title}</Title_>;
};

export default Title;
