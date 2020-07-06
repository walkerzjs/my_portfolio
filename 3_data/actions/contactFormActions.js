import * as actionTypes from "./actionTypes";
export const updateValue = (key, value) => {
  //   console.log("dispatch update value");
  return { type: actionTypes.UPDATE_VALUE, key: key, value: value };
};

export const validating = (key, value) => {
  switch (key) {
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
      return null;

    default:
      return "should not be here";
  }
};
