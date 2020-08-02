import * as actionTypes from "./actionTypes";
import axiosBase, { axiosReCaptcha } from "../axiosBase";
import axios from "axios";
import { secretKey } from "../../2_containers/Shared/ReCaptcha";
export const updateValue = (key, value) => {
  return { type: actionTypes.UPDATE_VALUE, key: key, value: value };
};

export const validating = (key, type, value) => {
  switch (type) {
    case "name":
      if (value === "" || value === null) {
        return {
          type: actionTypes.VALIDATING,
          key: key,
          isValid: false,
          validationErrorMessage: "Please enter your name",
        };
      } else {
        return {
          type: actionTypes.VALIDATING,
          key: key,
          isValid: true,
          validationErrorMessage: "",
        };
      }
    case "email":
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      let isEmailValid = pattern.test(value);
      let emailErrorMessage = "";
      if (!isEmailValid) {
        emailErrorMessage =
          "Please enter a valid Email address (e.g. test@test.com)";
      }
      return {
        type: actionTypes.VALIDATING,
        key: key,
        isValid: isEmailValid,
        validationErrorMessage: emailErrorMessage,
      };
    case "message":
      let isMessageValid = true;
      let messageValidationError = "";
      if (value === "" || value === null) {
        isMessageValid = false;
        messageValidationError = "Please enter your message";
      }
      return {
        type: actionTypes.VALIDATING,
        key: key,
        isValid: isMessageValid,
        validationErrorMessage: messageValidationError,
      };

    default:
      return { type: null };
  }
};

export const submitCheck = () => {
  return (dispatch, getState) => {
    const config = getState().contactFormReducer.formConfig;
    const valueList = Object.keys(config).map((key) => [
      key,
      config[key].type,
      config[key].value,
    ]);
    valueList.forEach((item) => {
      dispatch(validating(...item));
    });
  };
};

export const submit = () => {
  return (dispatch, getState) => {
    const config = getState().contactFormReducer.formConfig;
    const formValues = Object.keys(config).map((key) => {
      return {
        key: key,
        [config[key].type]: config[key].value,
        type: [config[key].type],
      };
    });
    let formValuesObject = {};
    formValues.forEach((item) => {
      formValuesObject[item.type] = item[item.type];
    });
    dispatch({ type: actionTypes.SUBMIT_START });
    axiosBase
      .post("messages.json", formValuesObject)
      .then((response) => {
        dispatch({ type: actionTypes.SUBMIT_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: actionTypes.SUBMIT_FAILED, error: error.message });
      });
  };
};

export const robotCheck = (token) => {
  return (dispatch) => {
    const requestObject = {
      secret: secretKey,
      response: token,
    };
    dispatch({ type: actionTypes.ROBOT_CHECKING_START });
    axios
      // .post("https://www.google.com/recaptcha/api/siteverify", requestObject)
      .get(`http://localhost:3000/api/validateReCaptcha?token=${token}`)
      .then((response) => {
        if (response.data.success === true) {
          dispatch({ type: actionTypes.ROBOT_CHECKING_SUCCESS });
        } else {
          dispatch({
            type: actionTypes.ROBOT_CHECKING_FAILED,
            isRobot: true,
            error: response.data["error-codes"],
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.ROBOT_CHECKING_FAILED,
          isRobot: undefined,
          error: error.message,
        });
      });
  };
};
