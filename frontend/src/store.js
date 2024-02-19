import { combineReducers } from "redux";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

// Import your reducers here
// Example:
// import authReducer from './reducers/authReducer';

// Combine your reducers
const rootReducer = combineReducers({
  // auth: authReducer,
  // Add your reducers here
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware],
  preloadedState: initialState,
});

export default store;
