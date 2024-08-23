import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  updateValue,
  validating,
} from "../../../../../../main_data/actions/contactFormActions";
import TextareaAutosize from "react-textarea-autosize";

const StyledTextareaAutosize = (props) => {
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
  return (
    <TextareaAutosize
      type="text"
      name="message"
      className={props.className}
      placeholder={placeholder}
      value={value}
      minRows="6"
      onChange={(e) => inputChange(props.id, type, e.target.value)}
      onBlur={(e) => inputChange(props.id, type, e.target.value)}
      aria-label={`Input your ${placeholder.replace(/.$/, "")}`}
    />
  );
};

const StyledTextareaAutosize_ = styled(StyledTextareaAutosize)`
  padding: 2rem;
  width: 100%;
  min-width: 12rem;
  max-height: 60rem;
  box-sizing: border-box;
  background: var(--white) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  resize: horizontal;
  font-size: 18px;
  font-family: Noto Sans, serif;
  /* should set this, otherwise there will be space below textarea */
  /* display: inline-block; */
  border: ${(props) => {
    if (props.isValid === false) {
      if (props.theme.mode === "dark") {
        return "2px solid var(--red)";
      }
      return "2px solid var(--red-origin)";
    } else {
      if (props.theme.mode === "dark") {
        return "2px solid var(--grey-5)";
      }
      return "2px solid var(--blue-2)";
    }
  }};
  transition: border 0.2s ease-out;
`;

export default StyledTextareaAutosize_;
