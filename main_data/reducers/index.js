import { combineReducers } from "redux";

import TestReducer from "./test/index";
import projectsReducer from "./projectsReducer";
import contactFormReducer from "./contactFormReducer";
import sidebarReducer from "./sidebarReducer";

export default combineReducers({
  TestReducer,
  projectsReducer,
  contactFormReducer,
  sidebarReducer,
});
