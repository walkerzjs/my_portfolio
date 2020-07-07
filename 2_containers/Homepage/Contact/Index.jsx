import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm/Index";
import SideDecor from "./SideDecor";

const Index_ = styled.section`
  min-height: 42.2vw;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: #f9f9f9 0% 0% no-repeat padding-box;
  opacity: 1;

  display: flex;
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
