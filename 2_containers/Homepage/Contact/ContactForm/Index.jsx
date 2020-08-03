import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Input from "./Shared/Input/Index";
import SubmitButton from "./Shared/SubmitButton";
import SubmitError from "./SubmitError";
import { useSelector, shallowEqual } from "react-redux";
import Spinner from "../../../../2_containers/Shared/Spinner";
import SpinnerWhite from "../../../../2_containers/Shared/SpinnerWhite";
import Captcha from "./ReCaptcha/Index.jsx";

const Form = styled.form`
  margin-left: 13.5vw;
  width: 28.3vw;
  display: flex;
  flex-direction: column;
  /* min-height: 700px; */

  justify-content: flex-start;
  @media (max-width: 1280px) {
    width: 33vw;
  }
  @media (max-width: 950px) {
    margin-left: 0;
    width: 60vw;
  }
  @media (max-width: 534px) {
    width: 70vw;
  }
  @media (max-width: 412px) {
    width: 90vw;
  }
`;

const Index = (props) => {
  const Theme = useContext(ThemeContext);
  const keys = useSelector(
    (state) =>
      Object.keys(state.contactFormReducer.formConfig).sort((a, b) => a - b),
    shallowEqual
  );
  let isSubmitting = useSelector(
    (state) => state.contactFormReducer.submitting
  );
  // isSubmitting = true;
  let submitSpinner = Theme.mode === "light" ? <Spinner /> : <SpinnerWhite />;
  let content = (
    <>
      <SubmitError />
      <Input key={keys[0]} id={keys[0]} />
      <Input key={keys[1]} id={keys[1]} />
      <Input key={keys[2]} id={keys[2]} />

      <Captcha />
      {isSubmitting === true ? submitSpinner : <SubmitButton />}
    </>
  );
  // if (isSubmitting && Theme.mode === "light") {
  //   content = <Spinner />;
  // }
  // if (isSubmitting && Theme.mode === "dark") {
  //   content = <SpinnerWhite />;
  // }

  return (
    // <div>
    <Form>{content}</Form>
    // </div>
  );
};

export default Index;
