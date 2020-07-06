import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateValue } from "../../../../../../3_data/actions/contactFormActions";

const ErrorMessage_ = styled.p`
  color: red;
  font-size: 1.6rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

const ErrorMessage = (props) => {
  const areEqual = (cur, prev) => {
    // console.log("prev: ", prev, "cur:", cur);
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
    return null;
  } else {
    return <ErrorMessage_>{validationErrorMessage}</ErrorMessage_>;
  }
};

export default ErrorMessage;
