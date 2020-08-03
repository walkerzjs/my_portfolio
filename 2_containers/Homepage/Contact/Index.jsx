import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm/Index";
import SideDecor from "./SideDecor";
// import theme from "styled-theming";

// const background = theme("mode", {
//   light: "#f9f9f9 0% 0% no-repeat padding-box",
//   dark: "var(--grey-5) 0% 0% no-repeat padding-box",
// });

const Index_ = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  transition: all 0.2s ease-out;
  opacity: 1;
  display: flex;
  width: 100%;
  /* margin: 0 auto; */

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Index = (props) => {
  return (
    <Index_ id="contact">
      <ContactForm />
      <SideDecor />
    </Index_>
  );
};

export default Index;
