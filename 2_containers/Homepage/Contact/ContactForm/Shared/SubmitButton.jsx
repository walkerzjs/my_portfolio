import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { submitAction } from "../../../../../3_data/actions/contactFormActions";

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
  const dispatch = useDispatch();

  return <Button_>Submit</Button_>;
};

export default SubmitButton;
