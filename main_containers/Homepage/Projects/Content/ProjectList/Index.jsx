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
  grid-row-gap: 5rem;

  @media (max-width: 1450px) {
    grid-column-gap: 5vw;
  }
  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15vw;
  }
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12vw;
  }
  @media (max-width: 896px) {
    grid-column-gap: 8vw;
  }
  @media (max-width: 750px) {
    grid-template-columns: 28rem;
    justify-content: center;
    grid-row-gap: 7rem;
  }
  @media (max-width: 448px) {
    margin-top: 5rem;
    /* grid-template-columns: 32rem; */
    grid-row-gap: 5rem;
  }

  @media (max-width: 300px) {
    grid-template-columns: 100vw;
    margin-top: 3rem;
  }
`;

const ProjectList = (props) => {
  const projectData = useSelector(
    (state) => Object.keys(state.projectsReducer),
   ()=>true
  );
  const projects = projectData
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    })
    .map((id) => {
      return (
        <li key={id}>
          <SharedCard id={id} />
        </li>
      );
    });

  return <ProjectList_>{projects}</ProjectList_>;
};

export default ProjectList;
