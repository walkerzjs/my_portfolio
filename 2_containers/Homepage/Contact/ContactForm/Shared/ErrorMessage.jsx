import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import theme from "styled-theming";

const textColor = theme("mode", {
  light: "var(--red-origin)",
  dark: "var(--red)",
});

const ErrorMessage_ = styled.p`
  color: ${textColor};
  font-size: 19px;
  overflow-wrap: break-word;
  min-height: 37px;
  /* font-weight: bold; */
  margin-left: 1rem;
  margin-top: 0.4rem;
  /* margin-bottom: 0.8rem; */
  /* display: ${(props) => (props.isValid !== false ? "none" : "block")}; */
  /* opacity: ${(props) => (props.isValid !== false ? "0" : "1")} */
`;

const PlaceHolder_ = styled.p`
  font-size: 19px;
  min-height: 35px;
  font-weight: bold;
  margin-left: 1rem;
  margin-top: 0.4rem;
`;

const ErrorMessage = (props) => {
  const areEqual = (cur, prev) => {
    if (prev.isValid !== cur.isValid) {
      return false;
    }
    if (prev.validationErrorMessage !== cur.validationErrorMessage) {
      return false;
    }
    return true;
  };
  const { isValid, validationErrorMessage } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    areEqual
  );
  if (isValid !== false) {
    return (
      <PlaceHolder_ aria-label="Placeholder for error message, no use for now."></PlaceHolder_>
    );
  } else {
    return <ErrorMessage_>{validationErrorMessage}</ErrorMessage_>;
  }
};

export default ErrorMessage;
