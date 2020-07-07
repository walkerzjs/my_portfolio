import React from "react";
import styled from "styled-components";
import Notes from "./Notes";
import SocialMedia from "./SocialMedia";

const Footer_ = styled.footer`
  width: 100%;
  height: 22.8vw;

  background: transparent url("/footer.svg") 0% 0% no-repeat padding-box;
  background-size: cover;
  opacity: 1;
  background-color: var(--grey-4);
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
