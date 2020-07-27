import React from "react";
import styled from "styled-components";
import Title from "./Content/Title";
import ProjectList from "./Content/ProjectList/Index";
import theme from "styled-theming";

const background = theme("mode", {
  light: "#f9f9f9 0% 0% no-repeat padding-box",
  dark: "var(--grey-5) 0% 0% no-repeat padding-box",
});

const Projects_ = styled.section`
  /* position: relative; */
  padding: 5rem 13.5vw;
  padding-bottom: 11.5rem;
  width: 100%;
  background: ${background};
  opacity: 1;
  transition: all 0.2s ease-out;
  margin-top: -2px;
`;

const Projects = (props) => {
  return (
    <Projects_ id="projects">
      <Title />
      <ProjectList />
    </Projects_>
  );
};

export default Projects;
