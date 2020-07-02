import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Description = (props) => {
  const description = useSelector(
    (state) => state.projectsReducer[props.id].desc
  );
  return <p>{description}</p>;
};

export default Description;
