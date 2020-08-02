import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { siteKey } from "../../../../Shared/ReCaptcha";
import { robotCheck } from "../../../../../3_data/actions/contactFormActions";

const Captcha = (props) => {
  const recaptchaRef = useRef();
  const dispatch = useDispatch();
  const onChange = async (token) => {
    await dispatch(robotCheck(token));
  };
  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={siteKey}
      onChange={onChange}
      aria-label="Check the client is not a robot."
    />
  );
};

export default Captcha;
