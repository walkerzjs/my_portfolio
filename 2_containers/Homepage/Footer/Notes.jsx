import React from "react";
import styled from "styled-components";

const Notes_ = styled.span`
  font-size: 2rem;
  /* height: 3rem; */
  margin-bottom: 6vw;
  margin-left: 13.5vw;
  @media (max-width: 1250px) {
    margin-bottom: 3vw;
  }
  @media (max-width: 950px) {
    margin-left: 0;
    margin-bottom: 3rem;
  }
  @media (max-width: 720px) {
    font-size: 1.7rem;
  }
`;

const Notes = (props) => {
  let newDate = new Date()
  return <Notes_>2020 - {newDate.getFullYear()}, by Junshuai Zhang (Jacob)</Notes_>;
};

export default Notes;
