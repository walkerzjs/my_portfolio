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
  display: flex;
  justify-content: space-between;
  padding-top: 10vw;
  width: 100%;
  height: 38.3vw;
  transition: all 0.2s ease-out;
  opacity: 1;

  @media (max-width: 1023px) {
    /* height: 600px; */
  }
  @media (max-width: 950px) {
    height: auto;
    /* min-height: 600px; */
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
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
