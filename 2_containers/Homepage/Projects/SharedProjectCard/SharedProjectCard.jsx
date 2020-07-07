import React from "react";
import styled from "styled-components";
import Image from "./Content/Image";
import Descriptions from "./Content/Descriptions/Descriptions";

const SharedProjectCard_ = styled.div`
  /* width: 19vw; */
  width: 100%;
  height: 28vw;
  background: var(--white) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 8px #00000029;
  border-radius: 3rem;
  padding: 4rem;
  opacity: 1;

  @media screen and (max-width: 80rem) {
    height: 35vw;
  }
  @media screen and (max-width: 64rem) {
    height: 38vw;
  }
  @media screen and (max-width: 56rem) {
    height: 40.7rem;

    /* grid-template-rows:  */
  }
`;

const SharedProjectCard = (props) => {
  return (
    <SharedProjectCard_>
      <Image id={props.id} />
      <Descriptions id={props.id} />
    </SharedProjectCard_>
  );
};
export default SharedProjectCard;
