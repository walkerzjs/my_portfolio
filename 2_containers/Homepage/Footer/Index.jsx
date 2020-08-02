import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Notes from "./Notes";
import SocialMedia from "./SocialMedia";

const Footer_ = styled.footer`
  width: 100%;
  height: 22.8vw;
  background: url("/footer.svg") 0% 0% no-repeat padding-box;
  background-size: cover;
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
  const theme = useContext(ThemeContext);
  return (
    <Footer_ mode={theme.mode}>
      <Notes />
      <SocialMedia />
    </Footer_>
  );
};

export default Footer;
