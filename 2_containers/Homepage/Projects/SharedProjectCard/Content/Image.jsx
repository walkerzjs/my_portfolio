import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Image = (props) => {
  const image = useSelector((state) => state.projectsReducer[props.id].image);
  return <div>image: {image}</div>;
};

export default Image;
