import configStore from "./store/configStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import customStore from "./store/customStore";

const store = configStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug2"));
store.dispatch(bugAdded("bug3 "));
store.dispatch(bugResolved(1));
unsubscribe();
// store.dispatch(bugRemoved(1));

console.log(store.getState());

// customStore.subscribe(() => {
//   console.log("Store changed!", customStore.getState());
// });

// customStore.dispatch(bugAdded("bug1"));

// console.log(customStore.getState());
