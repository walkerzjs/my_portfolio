import React from "react";
import styled from "styled-components";

const SideDecor_ = styled.img`
  margin-left: 15.2vw;
  margin-top: 3rem;
  display: block;
  width: 26.4vw;
  height: 19.6vw;

  @media (max-width: 1280px) {
    margin-left: 11.2vw;
  }
  @media (max-width: 950px) {
    margin-left: 0;
    width: 45vw;
    height: 60vw;
  }
  @media (max-width: 534px) {
    width: 55vw;
  }
  @media (max-width: 412px) {
    width: 65vw;
  }
`;

// https://pixabay.com/vectors/online-learning-call-webinar-5268393/
const SideDecor = (props) => {
  return <SideDecor_ src="/meeting.svg" alt="" />;
};

export default SideDecor;
