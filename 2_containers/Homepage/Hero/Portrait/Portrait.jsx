import React from "react";
import styled from "styled-components";

const Portrait_ = styled.div`
  position: absolute;
  right: 13.8%;
  top: 20%;
  width: 33%;
  height: 16.2vw;
  background: transparent url("/portrait.svg") 0% 0% no-repeat padding-box;
  background-size: contain;
  opacity: 1;
`;

const Portrait = (props) => {
  return <Portrait_></Portrait_>;
};

export default Portrait;
