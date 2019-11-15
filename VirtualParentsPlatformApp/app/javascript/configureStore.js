import { createStore } from "redux";

// This is the inital redux state
const initialState = {
  user: null,
  stoof: "stoof",
  tasks: []
};

// This reducer handles all of the actions
function rootReducer(state, action) {
  console.log(action.type, action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TASKS":
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
}

// this is the store object that we pass in at the root of the app (in App.tsx)
export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
