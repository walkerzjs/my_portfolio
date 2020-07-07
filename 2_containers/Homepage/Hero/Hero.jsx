import React from "react";
import styled from "styled-components";
import Portrait from "./Portrait/Portrait";
import Intro from "./Introduction/Intro";
const Hero_ = styled.section`
  position: relative;
  z-index: 10;
  width: 100%;
  /* max-width: 1920px; */
  height: 34.5vw;
  /* max-height: 66.3rem; */
  background: transparent url("/heroBackground.svg") 0% 0% no-repeat;
  background-size: cover;
  opacity: 1;
  @media screen and (max-width: 950px) {
    height: 600px;
  }
  @media screen and (max-width: 492px) {
    height: 700px;
  }
`;

const Hero = (props) => {
  return (
    <Hero_ id="intro" aria-label="hero section">
      <Intro />
      <Portrait />
    </Hero_>
  );
};

export default Hero;
