import React from "react";
import styled from "styled-components";
import Notes from "./Notes";
import SocialMedia from "./SocialMedia";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#f9f9f9",
  dark: "var(--grey-5)",
});

const Footer_ = styled.footer`
  width: 100vw;
  height: 22.8vw;

  margin-top: -2px;
  background: url("/footer.svg") 0% 0% no-repeat padding-box;
  /* background-size: contain; */
  opacity: 1;
  background-color: ${backgroundColor};
  overflow-x: auto;
  overflow-y: auto;
  transition: all 0.2s ease-out;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 200px;
    padding-bottom: 2rem;
  }
`;

const Footer = (props) => {
  return (
    <Footer_>
      <Notes />
      <SocialMedia />
    </Footer_>
  );
};

export default Footer;
