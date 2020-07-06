import * as actionTypes from "./actionTypes";
import axios from "../axiosBase";

export const updateValue = (key, value) => {
  //   console.log("dispatch update value");
  return { type: actionTypes.UPDATE_VALUE, key: key, value: value };
};

export const validating = (key, type, value) => {
  //   console.log("key: ", key, type, value);

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
  //   console.log("submitCheck");
  return (dispatch, getState) => {
    // console.log("getting state: ", getState());

    const config = getState().contactFormReducer.formConfig;
    const valueList = Object.keys(config).map((key) => [
      key,
      config[key].type,
      config[key].value,
    ]);
    // console.log(valueList);
    valueList.forEach((item) => {
      //   console.log(item);
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
    // console.log("formvalues: ", formValuesObject);
    dispatch({ type: actionTypes.SUBMIT_START });
    axios
      .post("messages.json", formValuesObject)
      .then((response) => {
        // console.log(("response: ", response));
        dispatch({ type: actionTypes.SUBMIT_SUCCESS });
      })
      .catch((error) => {
        // console.log("error: ", error.message);
        dispatch({ type: actionTypes.SUBMIT_FAILED, error: error.message });
      });
  };
};
