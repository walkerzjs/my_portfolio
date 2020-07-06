const initialState = {
  isValid: undefined,
  submitError: false,
  submitErrorMessage: "",
  formConfig: {
    name: {
      placeholder: "Your Name*",
      validationRequired: true,
      isValid: undefined,
      value: "",
      errorMessage: "",
    },
    email: {
      placeholder: "Your Email*",
      validationRequired: true,
      isValid: undefined,
      value: "",
      errorMessage: "",
    },
    message: {
      placeholder: "Your Message*",
      validationRequired: true,
      isValid: undefined,
      value: "",
      errorMessage: "",
    },
  },
};

const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactFormReducer;
