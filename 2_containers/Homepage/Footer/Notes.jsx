import React from "react";
import styled from "styled-components";

const Notes_ = styled.span`
  font-size: 2rem;
  /* height: 3rem; */
  margin-bottom: 6vw;
  margin-left: 13.5vw;
  @media screen and (max-width: 1250px) {
    margin-bottom: 3vw;
  }
  @media screen and (max-width: 950px) {
    margin-left: 0;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 1.7rem;
  }
`;

const Notes = (props) => {
  return (
    <Notes_>
      Made by <b>Junshuai Zhang</b>
    </Notes_>
  );
};

export default Notes;
