import { combineReducers } from "redux";

import TestReducer from "./test/index";
import projectsReducer from "./projectsReducer";
export default combineReducers({ TestReducer, projectsReducer });
