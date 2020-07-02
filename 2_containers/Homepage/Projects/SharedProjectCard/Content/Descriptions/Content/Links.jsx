import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Links = (props) => {
  const githubLink = useSelector(
    (state) => state.projectsReducer[props.id].githubLink
  );
  const website = useSelector(
    (state) => state.projectsReducer[props.id].website
  );

  return (
    <div>
      {githubLink},{website}
    </div>
  );
};

export default Links;
