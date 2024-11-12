// Refered to https://github.com/vercel/next.js/tree/canary/examples/with-redux/store.js

import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import reducer from "./reducers/index.js";
let store;

const initialState = {};

// const devTools =
//   process.env.NODE_ENV === "production"
//     ? applyMiddleware(thunk)
//     : applyMiddleware(thunk);
    // : composeWithDevTools(applyMiddleware(thunk));
const devTools = applyMiddleware(thunk);
// const devTools = composeWithDevTools(applyMiddleware(thunk));

function initStore(preloadedState = initialState) {
  return createStore(reducer, preloadedState, devTools);
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
