import React from "react";
import styled from "styled-components";
import Image from "./Content/Image";
import Descriptions from "./Content/Descriptions/Descriptions";
const SharedProjectCard = (props) => {
  return (
    <div>
      <Image id={props.id} />
      <Descriptions id={props.id} />
    </div>
  );
};
export default SharedProjectCard;
