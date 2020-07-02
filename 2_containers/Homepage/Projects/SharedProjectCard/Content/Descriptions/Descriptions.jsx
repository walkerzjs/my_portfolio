import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Title from "./Content/Title";
import Description from "./Content/Description";
import Links from "./Content/Links";

const Descriptions = (props) => {
  return (
    <div>
      <Title id={props.id} />
      <Description id={props.id} />
      <Links id={props.id} />
    </div>
  );
};

export default Descriptions;
