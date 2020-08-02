//npm install --save-dev cross-fetch redux-mock-store fetch-mock

import "cross-fetch/polyfill";

function fetchTodosRequest() {
  return {
    type: "FETCH_TODOS_REQUEST",
  };
}

function fetchTodosSuccess(body) {
  return {
    type: "FETCH_TODOS_SUCCESS",
    body,
  };
}

function fetchTodosFailure(ex) {
  return {
    type: "FETCH_TODOS_FAILURE",
    ex,
  };
}

export function fetchTodos() {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        return dispatch(fetchTodosSuccess(body));
      })
      .catch((ex) => dispatch(fetchTodosFailure(ex)));
  };
}
