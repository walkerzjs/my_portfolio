import React from "react";
import styled from "styled-components";
import Input from "./Shared/Input/Index";
import SubmitButton from "./Shared/SubmitButton";
import SubmitError from "./SubmitError";
import { useSelector, shallowEqual } from "react-redux";
import Spinner from "../../../../2_containers/Shared/Spinner";

const Form = styled.form`
  margin-left: 13.5vw;
  width: 28.3vw;
  height: 49.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
    width: 33vw;
  }
  @media screen and (max-width: 950px) {
    margin-left: 0;
    width: 60vw;
  }
  @media screen and (max-width: 534px) {
    width: 70vw;
  }
  @media screen and (max-width: 412px) {
    width: 90vw;
  }
`;

const Index = (props) => {
  const keys = useSelector(
    (state) =>
      Object.keys(state.contactFormReducer.formConfig).sort((a, b) => a - b),
    shallowEqual
  );
  const isSubmitting = useSelector(
    (state) => state.contactFormReducer.submitting
  );
  const submitError = useSelector(
    (state) => state.contactFormReducer.submitError
  );
  const submitErrorMessage = useSelector(
    (state) => state.contactFormReducer.submitErrorMessage
  );
  //   console.log("isSubmitting: ", isSubmitting);
  let content = (
    <>
      <SubmitError />
      <Input key={keys[0]} id={keys[0]} />
      <Input key={keys[1]} id={keys[1]} />
      <Input key={keys[2]} id={keys[2]} />
      <SubmitButton />
    </>
  );
  if (isSubmitting) {
    content = <Spinner />;
  }
  return <Form>{content}</Form>;
};

export default Index;
