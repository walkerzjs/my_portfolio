import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  submit,
  submitCheck,
} from "../../../../../3_data/actions/contactFormActions";

const Button_ = styled.button`
  background: var(--blue-3) 0% 0% no-repeat padding-box;
  border-radius: 7px;
  opacity: 1;
  height: 5rem;
  width: 9vw;
  margin: 0 auto;
  box-sizing: content-box;
  border: none;
  /* display: block; */
  color: var(--white);
  font-size: 1.9rem;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100px;
    /* font-size: 1.8rem; */
    height: 4.5rem;
  }
`;

const SubmitButton = (props) => {
  const buttonEl = useRef(null);
  const isValid = useSelector((state) => state.contactFormReducer.isValid);
  // console.log("isValid: ", isValid);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("e: ", e);
    if (isValid) {
      dispatch(submit());
    } else {
      dispatch(submitCheck());
    }
  };

  return (
    <Button_
      ref={buttonEl}
      type="submit"
      aria-label="Submit your message"
      onClick={(e) => onSubmit(e)}
      //Tackle a wierd bug(maybe) on Chrome to resize textarea too quickly
      // when this button is focused.
      onMouseOut={() => {
        buttonEl.current.blur();
      }}
    >
      Submit
    </Button_>
  );
};

export default SubmitButton;
