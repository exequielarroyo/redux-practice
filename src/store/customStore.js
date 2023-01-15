import reducer from "./bugs";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);

    for (const listener of listeners) {
      listener();
    }
  }

  function getState() {
    return state;
  }

  return { dispatch, getState, subscribe };
}

export default createStore(reducer);
