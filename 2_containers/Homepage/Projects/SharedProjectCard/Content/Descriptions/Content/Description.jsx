import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Description_ = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0px;
  text-align: left;
  height: 40%;
`;

const Description = (props) => {
  const description = useSelector(
    (state) => state.projectsReducer[props.id].desc
  );
  return <Description_>{description}</Description_>;
};

export default Description;
