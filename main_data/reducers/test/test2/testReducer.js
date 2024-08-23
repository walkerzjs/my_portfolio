const reducer = (state = { test: true }, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        testStatus: "success",
      };

    default:
      return state;
  }
};

export default reducer;
