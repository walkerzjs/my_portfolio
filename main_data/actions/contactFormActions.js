import * as actionTypes from "./actionTypes";
// import axiosBase from "../axiosBase";
import axios from "axios";


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
import {app} from "../firebase";
import { signInAnonymously,getAuth } from "firebase/auth"; // Import necessary auth functions
export const submit = () => {
  return async (dispatch, getState) => {
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
    // add local time and utc time
    const now = new Date();
    const utcTime = now.toISOString();
    const melbourneTime = now.toLocaleString("en-AU", { timeZone: "Australia/Melbourne" });
    formValuesObject['insert_time_UTC'] = utcTime;
    formValuesObject['insert_time_Melbourne'] = melbourneTime;
    dispatch({ type: actionTypes.SUBMIT_START });
    // Authenticate anonymously with Firebase
    const auth = getAuth(app);
    // console.log("auth:", auth);
    let user = auth.currentUser;
    if (!user) {
      console.log("No user signed in, attempting anonymous sign-in...");
      try {
        const userCredential = await signInAnonymously(auth);
        user = userCredential.user;
        console.log("Anonymously signed in with UID:", user.uid);
      } catch (error) {
        console.error("Error during anonymous sign-in:", error);
        // Handle error, maybe show a message to the user
        return;
      }
    }
    // At this point, `user` should be an authenticated user (could be anonymous)
    if (!user) {
      console.error("Authentication failed. Cannot send form data.");
      return;
    }
    const idToken = await user.getIdToken();
    const dataPath = 'messages'; 
    const databaseURL = 'https://my-portfolio-b1ad0.firebaseio.com';
    const fullUrl = `${databaseURL}/${dataPath}.json?auth=${idToken}`;
    axios
      .post(fullUrl, formValuesObject)
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
    dispatch({ type: actionTypes.ROBOT_CHECKING_START });
    const url =
      process.env.NODE_ENV === "production"
        ? `https://jacob-portfolio.com/api/validateReCaptcha?token=${token}`
        : `http://localhost:3000/api/validateReCaptcha?token=${token}`;
    axios
      .get(url)
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
