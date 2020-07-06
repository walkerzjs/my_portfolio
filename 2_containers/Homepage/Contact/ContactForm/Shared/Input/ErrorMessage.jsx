import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateValue } from "../../../../../../3_data/actions/contactFormActions";

const ErrorMessage_ = styled.p`
  color: red;
  font-size: 1.6rem;
`;

const ErrorMessage = (props) => {
  const { isValid, validationErrorMessage } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    shallowEqual
  );
  if (isValid !== false) {
    return null;
  } else {
    return <ErrorMessage_>{validationErrorMessage}</ErrorMessage_>;
  }
};

export default ErrorMessage;
