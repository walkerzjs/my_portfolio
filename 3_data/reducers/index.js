import { combineReducers } from "redux";

import TestReducer from "./test/index";
import projectsReducer from "./projectsReducer";
import contactFormReducer from "./contactFormReducer";

export default combineReducers({
  TestReducer,
  projectsReducer,
  contactFormReducer,
});
