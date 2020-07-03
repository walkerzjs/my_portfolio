import React from "react";
import styled from "styled-components";
import SharedCard from "../../SharedProjectCard/SharedProjectCard";
import { useSelector } from "react-redux";

const ProjectList_ = styled.ul`
  li {
    list-style: none;
  }
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: space-between;
  grid-column-gap: 8vw;
`;

const ProjectList = (props) => {
  const projectData = useSelector((state) =>
    Object.keys(state.projectsReducer)
  );
  //   console.log(projectData);
  const projects = projectData.map((id) => {
    return (
      <li key={id}>
        <SharedCard id={id} />
      </li>
    );
  });
  //   console.log(projects);

  return <ProjectList_>{projects}</ProjectList_>;
};

export default ProjectList;
