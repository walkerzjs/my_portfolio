import React from "react";
import styled from "styled-components";
import SharedCard from "../../SharedProjectCard/SharedProjectCard";
import { useSelector, shallowEqual } from "react-redux";

const ProjectList_ = styled.ul`
  li {
    list-style: none;
  }
  margin-top: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  justify-content: space-between;
  grid-column-gap: 8vw;

  @media screen and (max-width: 90.6rem) {
    grid-column-gap: 4vw;
  }
  @media screen and (max-width: 70rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15vw;
    grid-row-gap: 5rem;
    /* grid-template-rows:  */
  }
  @media screen and (max-width: 61.25rem) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12vw;
    grid-row-gap: 5rem;
  }
  @media screen and (max-width: 56rem) {
    grid-column-gap: 8vw;
  }
  @media screen and (max-width: 45rem) {
    grid-template-columns: 34rem;
    justify-content: center;
    grid-row-gap: 7rem;
  }
  @media screen and (max-width: 28rem) {
    grid-template-columns: 32rem;
    grid-row-gap: 5rem;
  }
  @media screen and (max-width: 28rem) {
    grid-template-columns: 28rem;
  }
`;

const ProjectList = (props) => {
  const projectData = useSelector(
    (state) => Object.keys(state.projectsReducer),
    shallowEqual
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
