import React from "react";
import styled from "styled-components";
import SharedCard from "../SharedProjectCard/SharedProjectCard";
import { useSelector } from "react-redux";
const ProjectList = (props) => {
  const projectData = useSelector((state) =>
    Object.keys(state.projectsReducer)
  );
  //   console.log(projectData);
  const projects = projectData.map((id) => {
    return <SharedCard key={id} id={id} />;
  });
  //   console.log(projects);

  return <ul>{projects}</ul>;
};

export default ProjectList;
