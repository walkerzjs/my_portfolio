import React from "react";
import styled from "styled-components";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
const HomePage_ = styled.div`
  /* position: relative; */
`;

const HomePage = (props) => {
  return (
    <HomePage_>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </HomePage_>
  );
};

export default HomePage;
