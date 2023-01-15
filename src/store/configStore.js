import { createStore } from "redux";
import reducer from "./bugs";
import {devToolsEnhancer} from "redux-devtools-extension";

// const store = createStore(
    //   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default function configureStore(params) {
    const store = createStore(reducer, devToolsEnhancer({ trace: true }));
    return store;
};
