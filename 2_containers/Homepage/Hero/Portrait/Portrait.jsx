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
  @media screen and (max-width: 950px) {
    width: 300px;
    min-width: 200px;
    height: 300px;
    left: 50%;
    right: 0;
    top: 50%;
    transform: translateX(-50%);

    background-size: contain;
  }
  @media screen and (max-width: 348px) {
    width: 90vw;
    top: 58%;
  }
  @media screen and (max-width: 228px) {
    top: 64%;
  }
`;

const Portrait = (props) => {
  return <Portrait_></Portrait_>;
};

export default Portrait;
