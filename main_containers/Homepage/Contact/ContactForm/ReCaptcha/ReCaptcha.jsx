import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
// import { siteKey } from "../../../../Shared/ReCaptcha";
import { robotCheck } from "../../../../../main_data/actions/contactFormActions";
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
// console.log("siteKey:", siteKey);
const Captcha = (props) => {
  const recaptchaRef = useRef();
  const dispatch = useDispatch();
  const onChange = async (token) => {
    await dispatch(robotCheck(token));
  };
  

  const submitSuccess = useSelector(
    (state) => state.contactFormReducer.submitSuccess
  );
  if (submitSuccess === true) {
    recaptchaRef.current.reset();
  }
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
