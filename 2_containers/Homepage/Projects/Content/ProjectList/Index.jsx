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

  @media (max-width: 1450px) {
    grid-column-gap: 4vw;
  }
  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15vw;
    grid-row-gap: 5rem;
    /* grid-template-rows:  */
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12vw;
    grid-row-gap: 5rem;
  }
  @media (max-width: 896px) {
    grid-column-gap: 8vw;
  }
  @media (max-width: 750px) {
    grid-template-columns: 34rem;
    justify-content: center;
    grid-row-gap: 7rem;
  }
  @media (max-width: 448px) {
    margin-top: 5rem;
    grid-template-columns: 32rem;
    grid-row-gap: 5rem;
  }

  @media (max-width: 300px) {
    grid-template-columns: 90vw;
    margin-top: 3rem;
  }
`;

const ProjectList = (props) => {
  const projectData = useSelector(
    (state) => Object.keys(state.projectsReducer),
    shallowEqual
  );
  const projects = projectData.map((id) => {
    return (
      <li key={id}>
        <SharedCard id={id} />
      </li>
    );
  });

  return <ProjectList_>{projects}</ProjectList_>;
};

export default ProjectList;
