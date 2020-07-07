import React from "react";
import styled from "styled-components";

const SideDecor_ = styled.div`
  /* position: absolute; */
  /* top: 795px; */
  /* top: 35%; */
  margin-right: 18vw;
  margin-top: -2vw;
  width: 21.5vw;
  height: 21.5vw;
  background: transparent url("/aboutMeDecor.svg") 0% 0% no-repeat padding-box;
  opacity: 1;
  background-size: contain;

  @media screen and (max-width: 950px) {
    margin-right: 0;
    margin-top: 50px;
    height: 300px;
    width: 300px;
  }
  @media screen and (max-width: 496px) {
    height: 250px;
    width: 250px;
  }
  @media screen and (max-width: 334px) {
    height: 60vw;
    width: 60vw;
  }
`;

const SideDecor = (props) => {
  return <SideDecor_ />;
};

export default SideDecor;
