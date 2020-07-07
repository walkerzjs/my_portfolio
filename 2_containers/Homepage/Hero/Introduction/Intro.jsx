import React from "react";
import styled from "styled-components";
import Proposal from "./IntroContent/Proposal";
import SayHi from "./IntroContent/SayHi";
import SelfIntro from "./IntroContent/SelfIntro";

const Intro_ = styled.div`
  /* margin-left: 31.6rem;
  margin-top: 22.6rem; */
  height: 14.3vw;
  width: 30.5vw;
  position: absolute;
  left: 16.5%;
  top: 32%;
  @media screen and (max-width: 71rem) {
    top: 28%;
  }
  @media screen and (max-width: 1023px) {
    top: 20%;
  }
  @media screen and (max-width: 950px) {
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 60vw;
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
