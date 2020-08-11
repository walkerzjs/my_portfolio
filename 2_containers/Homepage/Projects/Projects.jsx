import React from "react";
import styled from "styled-components";
import Title from "./Content/Title";
import ProjectList from "./Content/ProjectList/Index";

const Projects_ = styled.section`
  padding: 5rem 13.5vw;
  padding-bottom: 11.5rem;
  width: 100%;
  opacity: 1;
  transition: all 0.2s ease-out;
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
