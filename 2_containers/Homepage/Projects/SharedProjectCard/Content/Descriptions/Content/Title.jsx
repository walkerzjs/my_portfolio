import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = (props) => {
  const title = useSelector((state) => state.projectsReducer[props.id].title);

  return <h2>{title}</h2>;
};

export default Title;
