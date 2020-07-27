import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  updateValue,
  validating,
} from "../../../../../../3_data/actions/contactFormActions";

const Input_ = styled.input`
  /* margin: 0 !important; */
  padding: 0 2rem;
  height: 5.8rem;
  width: 100%;
  background: var(--white) 0% 0% no-repeat padding-box;
  /* border: 2px solid var(--blue-2); */
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
  border: ${(props) => {
    if (props.isValid === false) {
      if (props.themeMode === "dark") {
        return "2px solid var(--red)";
      }
      return "2px solid red";
    } else {
      if (props.themeMode === "dark") {
        return "2px solid var(--grey-5)";
      }
      return "2px solid var(--blue-2)";
    }
  }};
  transition: border 0.2s ease-out;
  /* &:focus {
    outline: none;
  } */
`;

const TextArea_ = styled.textarea`
  /* margin: 0 !important; */
  position: relative;
  z-index: 10;
  padding: 2rem;
  width: 100%;
  resize: both;
  min-width: 12rem;
  height: 19.1rem;
  min-height: 9rem;
  box-sizing: border-box;
  background: var(--white) 0% 0% no-repeat padding-box;
  /* border: 2px solid var(--blue-2); */
  border-radius: 5px;
  opacity: 1;
  font-size: 1.8rem;
  font-family: Noto Sans, serif;
  /* should set this, otherwise there will be space below textarea */
  display: inline-block;
  border: ${(props) => {
    if (props.isValid === false) {
      if (props.themeMode === "dark") {
        return "2px solid var(--red)";
      }
      return "2px solid red";
    } else {
      if (props.themeMode === "dark") {
        return "2px solid var(--grey-5)";
      }
      return "2px solid var(--blue-2)";
    }
  }};
  transition: border 0.2s ease-out;

  &:focus {
    /* outline: none; */
  }
  /* ::-webkit-resizer {
    border: 2px solid black;
    background: red;
    box-shadow: 0 0 5px 5px blue;
    outline: 2px solid yellow;
  } */
`;

const Input = (props) => {
  let theme = useContext(ThemeContext);
  const { type, placeholder, value, isValid } = useSelector(
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
  let input = null;
  if (type === "name" || type === "email") {
    input = (
      <Input_
        themeMode={theme.mode}
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
  } else if (type === "message") {
    input = (
      <TextArea_
        type="text"
        name="message"
        themeMode={theme.mode}
        placeholder={placeholder}
        value={value}
        isValid={isValid}
        onChange={(e) => inputChange(props.id, type, e.target.value)}
        onBlur={(e) => inputChange(props.id, type, e.target.value)}
        aria-label={`Input your ${placeholder.replace(/.$/, "")}`}
      />
    );
  }

  return input;
};

export default Input;
