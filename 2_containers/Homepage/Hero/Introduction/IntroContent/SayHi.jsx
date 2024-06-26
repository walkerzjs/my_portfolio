import React from "react";
import styled from "styled-components";

const SayHi_ = styled.h1`
  text-align: left;
  font: Bold 28px/13px Arial;
  height: 2rem;
  line-height: 3rem;
  @media (max-width: 1190px) {
    font-size: 2.4rem;
  }
  @media (max-width: 432px) {
    height: 5rem;
  }
  @media (max-width: 278px) {
    height: 7rem;
  }
`;

const SayHi = (props) => {
  return <SayHi_>Hi, I am Jacob</SayHi_>;
};

export default SayHi;
