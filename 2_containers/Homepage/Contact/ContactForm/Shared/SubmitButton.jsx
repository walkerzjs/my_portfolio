import React from "react";
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
  border: none;
  color: var(--white);
  font-size: 1.9rem;
`;

const SubmitButton = (props) => {
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

  return <Button_ onClick={(e) => onSubmit(e)}>Submit</Button_>;
};

export default SubmitButton;
