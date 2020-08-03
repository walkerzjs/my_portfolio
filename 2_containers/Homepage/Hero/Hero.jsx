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
  background: transparent url("/heroBackground.svg") 0% 0% no-repeat padding-box;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  @media (max-width: 950px) {
    height: 710px;

    flex-direction: column;
    align-items: center;
    justify-content: start;
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
