import React from "react";
import styled from "styled-components";

const Notes_ = styled.span`
  font-size: 2rem;
  /* height: 3rem; */
  margin-bottom: 6vw;
  margin-left: 13.5vw;
`;

const Notes = (props) => {
  return (
    <Notes_>
      Made by <b>Junshuai Zhang</b>
    </Notes_>
  );
};

export default Notes;
