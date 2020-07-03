import React from "react";
import styled from "styled-components";
import Title from "./Content/Title";
import ProjectList from "./Content/ProjectList/Index";

const Projects_ = styled.section`
  position: relative;
  padding: 5rem 13.5vw;

  width: 100%;

  background: #f9f9f9 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Projects = (props) => {
  return (
    <Projects_>
      <Title />
      <ProjectList />
    </Projects_>
  );
};

export default Projects;
