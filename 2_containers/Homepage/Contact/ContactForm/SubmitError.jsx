import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ErrorMessage_ = styled.p`
  color: red;
  font-size: 19px;
  margin: 0 auto;
  line-height: 2.1rem;
`;

const SubmitError = (props) => {
  //   console.log("error");
  const areEqual = (cur, prev) => {
    // console.log("prev: ", prev, "cur:", cur);
    if (prev.submitError !== cur.submitError) {
      return false;
    }
    if (prev.submitErrorMessage !== cur.submitErrorMessage) {
      return false;
    }
    return true;
  };
  const { submitError, submitErrorMessage } = useSelector(
    (state) => state.contactFormReducer,
    areEqual
  );
  if (submitError !== true) {
    return null;
  } else {
    return (
      <ErrorMessage_>
        Sorry, there is an error when submitting the form: {submitErrorMessage}.
        Please try again or contact the administrator.
      </ErrorMessage_>
    );
  }
};

export default SubmitError;
