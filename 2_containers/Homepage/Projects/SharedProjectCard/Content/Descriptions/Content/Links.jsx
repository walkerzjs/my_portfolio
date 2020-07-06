import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Links_ = styled.div`
  font-size: 1.8rem;
  height: 30%;
  & a {
    color: var(--black);
  }
`;

const Links = (props) => {
  const githubLink = useSelector(
    (state) => state.projectsReducer[props.id].githubLink
  );

  return (
    <Links_>
      <a href={githubLink} target="_blank">
        Repository
      </a>
    </Links_>
  );
};

export default Links;
