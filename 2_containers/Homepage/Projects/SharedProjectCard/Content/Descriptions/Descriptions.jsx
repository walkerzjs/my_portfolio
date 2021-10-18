import React from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
import Title from "./Content/Title";
import Description from "./Content/Description";
import Links from "./Content/Links";
import Technologies from "./Content/Technologies";

const Descriptions_ = styled.div`
  height: 60%;
`;

const Descriptions = (props) => {
  return (
    <Descriptions_>
      <Title id={props.id} />
      <Description id={props.id} />
      {/* <Links id={props.id} /> */}
      <Technologies id={props.id} />
    </Descriptions_>
  );
};

export default Descriptions;
