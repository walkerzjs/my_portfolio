import React from "react";
import styled from "styled-components";
import DetailedIntro from "./Content/DetailedIntro";
import SideDecor from "./Content/SideDecor";
// import theme from "styled-theming";

// const background = theme("mode", {
//   light: "#f9f9f9 0% 0% no-repeat padding-box",
//   dark: "var(--grey-5) 0% 0% no-repeat padding-box",
// });

const AboutMe_ = styled.section`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  padding-top: 14vw;
  margin-top: -9vw;
  width: 100%;
  height: 38.3vw;
  /* background: ${background}; */
  transition: all 0.2s ease-out;
  opacity: 1;

  @media screen and (max-width: 1023px) {
    height: 600px;
    margin-top: -200px;
    padding-top: 280px;
  }
  @media screen and (max-width: 950px) {
    height: auto;
    min-height: 800px;
    flex-direction: column;
    align-items: center;
    padding-top: 230px;
    justify-content: start;
  }
`;

const AboutMe = (props) => {
  return (
    <AboutMe_ id="aboutMe">
      <DetailedIntro />
      <SideDecor />
    </AboutMe_>
  );
};

export default AboutMe;
