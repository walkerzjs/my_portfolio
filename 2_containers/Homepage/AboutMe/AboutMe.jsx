import React from "react";
import styled from "styled-components";
import DetailedIntro from "./Content/DetailedIntro";
import SideDecor from "./Content/SideDecor";
const AboutMe_ = styled.section`
  position: absolute;
  top: 27vw;
  left: 0px;
  width: 100%;
  height: 35.3vw;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const AboutMe = (props) => {
  return (
    <AboutMe_>
      <DetailedIntro />
      <SideDecor />
    </AboutMe_>
  );
};

export default AboutMe;