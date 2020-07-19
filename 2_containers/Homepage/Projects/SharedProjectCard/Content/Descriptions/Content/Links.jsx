import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Links_ = styled.div`
  font-size: 1.8rem;
  padding-top: 2rem;
  height: 30%;
  & a {
    color: var(--black);
  }
  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 170px) {
    font-size: 1.2rem;
  }
`;

const Links = (props) => {
  const githubLink = useSelector(
    (state) => state.projectsReducer[props.id].githubLink
  );

  return (
    <Links_>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        Repository
      </a>
    </Links_>
  );
};

export default Links;
