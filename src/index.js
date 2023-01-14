// import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actionCreator";
import customStore from "./customStore";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch(bugAdded("bug1"));
// store.dispatch(bugResolved(1));
// unsubscribe();
// store.dispatch(bugRemoved(1));

// console.log(store.getState());

customStore.subscribe(() => {
  console.log("Store changed!", customStore.getState());
});

customStore.dispatch(bugAdded("bug1"));

console.log(customStore.getState());
