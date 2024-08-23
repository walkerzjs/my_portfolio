import React from "react";
import styled from "styled-components";
import ReCaptcha from "./ReCaptcha";
import RobotErrorMessage from "./RobotErrorMessage";
import { useSelector } from "react-redux";

const Index_ = styled.div``;

const Index = (props) => {
  const isFormValid = useSelector((state) => state.contactFormReducer.isValid);
  let content = null;
  if (isFormValid === true) {
    content = (
      <Index_ aria-label="Google ReCAPTCHA">
        <ReCaptcha />
        <RobotErrorMessage />
      </Index_>
    );
  }

  return content;
};

export default Index;
