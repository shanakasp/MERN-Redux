import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

// Import your reducers here
// Example:
// import authReducer from './reducers/authReducer';

// Combine your reducers
const rootReducer = combineReducers({
  // auth: authReducer,
  // Add your reducers here
});

// Manually include redux-thunk middleware in the middleware array
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
  enhancers: (defaultEnhancers) => composeWithDevTools(...defaultEnhancers), // Enhance store with Redux DevTools Extension
});

export default store;
