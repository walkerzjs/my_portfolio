import React from "react";
import styled from "styled-components";

const SideDecor_ = styled.div`
  position: absolute;
  /* top: 795px; */
  top: 32%;
  right: 19vw;
  width: 22.5vw;
  height: 21.3vw;
  background: transparent url("/aboutMeDecor.svg") 0% 0% no-repeat padding-box;
  opacity: 1;
  background-size: contain;
`;

const SideDecor = (props) => {
  return <SideDecor_ />;
};

export default SideDecor;
