import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
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
  border-radius: 5px;
  opacity: 1;
  /* font-size: 1.8rem; */
  font-size: 18px;
  border: ${(props) => {
    if (props.isValid === false) {
      if (props.theme.mode === "dark") {
        return "2px solid var(--red)";
      }
      return "2px solid red";
    } else {
      if (props.theme.mode === "dark") {
        return "2px solid var(--grey-5)";
      }
      return "2px solid var(--blue-2)";
    }
  }};
  transition: border 0.2s ease-out;
`;

const Input = (props) => {
  const { placeholder, value, isValid, type } = useSelector(
    (state) => state.contactFormReducer.formConfig[props.id],
    shallowEqual
  );

  const dispatch = useDispatch();

  // input change
  const inputChange = (id, type, value) => {
    dispatch(validating(id, type, value));
    dispatch(updateValue(id, value));
  };

  // decide input type: input or textarea
  let input = (
    <Input_
      type="text"
      placeholder={placeholder}
      value={value}
      isValid={isValid}
      onChange={(e) => inputChange(props.id, type, e.target.value)}
      onBlur={(e) => inputChange(props.id, type, e.target.value)}
      // https://stackoverflow.com/questions/36630230/replace-last-character-of-string-using-javascript
      aria-label={`Input your ${placeholder.replace(/.$/, "")}`}
    />
  );
  return input;
};

export default Input;
