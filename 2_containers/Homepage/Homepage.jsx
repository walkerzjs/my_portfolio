import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Index";
import Footer from "./Footer/Index";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#eeeeee",
  dark: "var(--grey-5)",
});

const HomePage_ = styled.div`
  /* position: relative; */
  transition: all 0.2s;
  -webkit-transition: all 200ms;
  background-color: ${backgroundColor};
  width: 100%;
  overflow: hidden;
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
