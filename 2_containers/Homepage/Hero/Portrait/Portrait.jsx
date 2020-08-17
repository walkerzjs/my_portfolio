import React from "react";
import styled from "styled-components";

const Portrait_ = styled.div`
  width: 33vw;
  height: 16.2vw;
  margin-top: 6vw;
  margin-right: 10.8vw;
  background: transparent url("/portrait.svg") 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;

  @media (max-width: 1190px) {
    margin-right: 0;
  }
  @media (max-width: 950px) {
    width: 350px;
    height: 175px;
    margin-top: 70px;
    margin-right: 0vw;
  }
  @media (max-width: 546px) {
    width: 70vw;
    height: 35vw;
  }
  @media (max-width: 228px) {
    width: 90vw;
    height: 45vw;
  }
`;

const Portrait = (props) => {
  return <Portrait_></Portrait_>;
};

export default Portrait;
