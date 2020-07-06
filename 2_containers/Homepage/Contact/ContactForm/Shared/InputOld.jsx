import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { updateValue } from "../../../../../3_data/actions/contactFormActions";

const Input_ = styled.input`
  padding: 0 2rem;
  height: 5.8rem;
  width: 100%;
  background: var(--white) 0% 0% no-repeat padding-box;
  border: 2px solid var(--blue-2);
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
`;

const TextArea_ = styled.textarea`
  padding: 2rem;
  width: 100%;
  height: 19.1rem;
  background: var(--white) 0% 0% no-repeat padding-box;
  border: 2px solid var(--blue-2);
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
  font-family: Noto Sans, serif;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.6rem;
`;

const Input = (props) => {
  const {
    type,
    placeholder,
    validationRequired,
    value,
    isValid,
    errorMessage,
  } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    shallowEqual
  );
  const dispatch = useDispatch();
  // error part
  let errorSection = null;
  if (isValid === false) {
    errorSection = <ErrorMessage>{errorMessage}</ErrorMessage>;
  }
  // input change
  const inputChange = (id, value) => {
    dispatch(updateValue(id, value));
  };
  // decide input type
  let input = null;
  if (type === "name" || type === "email") {
    input = (
      <Input_
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputChange(props.id, e.target.value)}
      />
    );
  } else if (type === "message") {
    input = (
      <TextArea_
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputChange(props.id, e.target.value)}
      />
    );
  }

  return (
    <div>
      {input}
      {errorSection}
    </div>
  );
};

export default Input;
