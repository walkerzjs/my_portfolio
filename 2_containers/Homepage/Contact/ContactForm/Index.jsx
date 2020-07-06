import React from "react";
import styled from "styled-components";
import Input from "./Shared/Input";
import SubmitButton from "./Shared/SubmitButton";
import { useSelector, shallowEqual } from "react-redux";

const Form = styled.form`
  margin-left: 13.5vw;
  width: 28.3vw;
  height: 49.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Index = (props) => {
  const keys = useSelector(
    (state) =>
      Object.keys(state.contactFormReducer.formConfig).sort((a, b) => a - b),
    shallowEqual
  );
  console.log("keys: ", keys);
  return (
    <Form>
      <Input key={keys[0]} id={keys[0]} />
      <Input key={keys[1]} id={keys[1]} />
      <Input key={keys[2]} id={keys[2]} />
      <SubmitButton />
    </Form>
  );
};

export default Index;
