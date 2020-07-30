import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Index";
import Footer from "./Footer/Index";
const HomePage_ = styled.div`
  /* position: relative; */
  background-color: ${(props) =>
    props.mode === "light" ? "#f9f9f9" : "var(--grey-5)"};
  transition: background-color 0.2s ease-out;
`;

const HomePage = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <HomePage_ mode={theme.mode}>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </HomePage_>
  );
};

export default HomePage;
