import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  updateValue,
  validating,
} from "../../../../../../3_data/actions/contactFormActions";

const Input_ = styled.input`
  padding: 0 2rem;
  height: 5.8rem;
  width: 100%;
  background: var(--white) 0% 0% no-repeat padding-box;
  /* border: 2px solid var(--blue-2); */
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
  border: ${(props) =>
    props.isValid === false ? "2px solid red" : "2px solid var(--blue-2)"};
  &:focus {
    outline: none;
  }
`;

const TextArea_ = styled.textarea`
  padding: 2rem;
  width: 100%;
  height: 19.1rem;
  background: var(--white) 0% 0% no-repeat padding-box;
  /* border: 2px solid var(--blue-2); */
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
  font-family: Noto Sans, serif;
  border: ${(props) =>
    props.isValid === false ? "2px solid red" : "2px solid var(--blue-2)"};
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const { type, placeholder, validationRequired, value, isValid } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    shallowEqual
  );
  console.log("idValid: ", isValid);
  const dispatch = useDispatch();

  // input change
  const inputChange = (id, type, value) => {
    dispatch(validating(id, type, value));
    dispatch(updateValue(id, value));
  };

  // decide input type: input or textarea
  let input = null;
  if (type === "name" || type === "email") {
    input = (
      <Input_
        type="text"
        placeholder={placeholder}
        value={value}
        isValid={isValid}
        onChange={(e) => inputChange(props.id, type, e.target.value)}
        onBlur={(e) => inputChange(props.id, type, e.target.value)}
      />
    );
  } else if (type === "message") {
    input = (
      <TextArea_
        placeholder={placeholder}
        value={value}
        isValid={isValid}
        onChange={(e) => inputChange(props.id, type, e.target.value)}
        onBlur={(e) => inputChange(props.id, type, e.target.value)}
      />
    );
  }

  return input;
};

export default Input;
