import React from "react";
import styled from "styled-components";
import Proposal from "./IntroContent/Proposal";
import SayHi from "./IntroContent/SayHi";
import SelfIntro from "./IntroContent/SelfIntro";

const Intro_ = styled.div`
  height: auto;
  width: 30.5vw;
  margin-top: 9vw;
  margin-left: 16.5vw;
  @media screen and (max-width: 71rem) {
    margin-top: 8vw;
  }
  @media screen and (max-width: 1023px) {
    margin-top: 7vw;
  }
  @media screen and (max-width: 950px) {
    width: 70vw;
    margin-left: 0;
    height: auto;
    margin-top: 10%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
  @media screen and (max-width: 546px) {
    margin-top: 80px;
  }
`;

const Intro = (props) => {
  return (
    <Intro_>
      {" "}
      <SayHi />
      <SelfIntro />
      <Proposal />
    </Intro_>
  );
};

export default Intro;
