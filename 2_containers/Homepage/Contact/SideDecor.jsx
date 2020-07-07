import React from "react";
import styled from "styled-components";

const SideDecor_ = styled.img`
  margin-left: 15.2vw;
  margin-top: 3rem;
  display: inline-block;
  width: 26.4vw;
  height: 19.6vw;
`;

const SideDecor = (props) => {
  return <SideDecor_ src="/ContactDecor.svg" alt="" />;
};

export default SideDecor;
