import React from "react";
import styled from "styled-components";
import Image from "./Content/Image";
import Descriptions from "./Content/Descriptions/Descriptions";
import theme from "styled-theming";

const background = theme("mode", {
  light: "var(--white) 0% 0% no-repeat padding-box",
  dark: "var(--black) 0% 0% no-repeat padding-box",
});

const SharedProjectCard_ = styled.div`
  /* width: 19vw; */
  width: 100%;
  height: 28vw;
  background: ${background};
  box-shadow: 0px 3px 8px #00000029;
  border-radius: 3rem;
  padding: 4rem;
  opacity: 1;
  transition: all 0.2s ease-out;

  @media (max-width: 1280px) {
    height: 35vw;
  }
  @media (max-width: 1024px) {
    height: 38vw;
  }
  @media (max-width: 896px) {
    height: 40.7rem;

    /* grid-template-rows:  */
  }
  @media (max-width: 280px) {
    height: auto;
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
