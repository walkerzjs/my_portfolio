import * as actionTypes from "../actions/actionTypes";
const initialState = {
  isValid: undefined,

  isRobot: undefined,
  robotChecking: false,
  robotCheckingSuccess: false,
  robotCheckingError: false,
  robotCheckingErrorMessage: "",

  submitting: false,
  submitSuccess: false,
  submitSuccessMessage: "",
  submitError: false,
  submitErrorMessage: "",

  formConfig: {
    1: {
      type: "name",
      placeholder: "Your Name*",
      validationRequired: true,
      isValid: undefined,
      value: "",

      validationErrorMessage: "",
    },
    2: {
      type: "email",
      placeholder: "Your Email*",
      validationRequired: true,
      isValid: undefined,
      value: "",
      validationErrorMessage: "",
    },
    3: {
      type: "message",
      placeholder: "Your Message*",
      validationRequired: true,
      isValid: undefined,
      value: "",
      validationErrorMessage: "",
    },
  },
};

/**
 *    type: actionTypes.VALIDATING,
          key: key,
          isValid: false,
          validationErrorMessage: "Please enter your name",
 */

const contactFormReducer = (state = initialState, action) => {
  let config;
  switch (action.type) {
    case actionTypes.UPDATE_VALUE:
      config = { ...state.formConfig[action.key] };
      config.value = action.value;
      state.formConfig[action.key] = { ...config };
      return { ...state };
    case actionTypes.VALIDATING:
      config = { ...state.formConfig[action.key] };
      config.isValid = action.isValid;
      config.validationErrorMessage = action.validationErrorMessage;
      state.formConfig[action.key] = { ...config };

      let invalidList = Object.keys(state.formConfig).map((key) => {
        let value = state.formConfig[key];
        return !value.isValid;
      });
      let invalidAmount = invalidList.reduce((a, b) => a + b, 0);
      if (invalidAmount > 0) {
        state.isValid = false;
      } else {
        state.isValid = true;
      }
      return { ...state };

    case actionTypes.SUBMIT_START:
      state.submitting = true;
      state.submitSuccess = false;
      state.submitSuccessMessage = "";
      state.submitError = false;
      state.submitErrorMessage = "";
      return { ...state };
    case actionTypes.SUBMIT_SUCCESS:
      state.submitting = false;
      state.submitSuccess = true;
      state.submitSuccessMessage = "Submitted the message";
      state.submitError = false;
      state.submitErrorMessage = "";
      state.isRobot = undefined;
      return { ...state };
    case actionTypes.SUBMIT_FAILED:
      state.submitting = false;
      state.submitSuccess = false;
      state.submitError = true;
      state.submitErrorMessage = action.error;
      state.isRobot = undefined;
      return { ...state };

    case actionTypes.ROBOT_CHECKING_START:
      state.robotChecking = true;
      state.robotCheckingSuccess = false;
      state.robotErrorMessage = "";
      state.robotCheckingError = false;
      return { ...state };

    case actionTypes.ROBOT_CHECKING_SUCCESS:
      state.robotChecking = false;
      state.robotCheckingSuccess = true;
      state.robotErrorMessage = "";
      state.robotCheckingError = false;
      state.isRobot = false;
      return { ...state };

    case actionTypes.ROBOT_CHECKING_FAILED:
      state.robotChecking = false;
      state.robotCheckingSuccess = false;
      state.robotErrorMessage = action.error;
      state.robotCheckingError = true;
      state.isRobot = action.isRobot;
      return { ...state };

    default:
      return state;
  }
};

export default contactFormReducer;
