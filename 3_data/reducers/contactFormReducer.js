import * as actionTypes from "../actions/actionTypes";
const initialState = {
  isValid: undefined,
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

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_VALUE:
      const config = { ...state.formConfig[action.key] };
      config.value = action.value;
      state.formConfig[action.key] = { ...config };
      return state;

    default:
      return state;
  }
};

export default contactFormReducer;
