import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Index";
import Footer from "./Footer/Index";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  // light: "#eeeeee",
  light: "var(--grey-4)",
  dark: "var(--grey-5)",
});

const HomePage_ = styled.div`
  /* position: relative; */
  margin-top: 70px;
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
