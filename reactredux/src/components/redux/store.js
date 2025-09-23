// Importing createStore and applyMiddleware from Redux
// createStore → creates the Redux store
// applyMiddleware → allows adding extra functionality (middlewares)
import { createStore, applyMiddleware } from "redux"; 

// Import rootReducer (combined reducer for pizza, burger, product, etc.)
import rootReducer from "./rootReducers";

// Import logger middleware → logs every action and the updated state (useful for debugging)
import logger from "redux-logger" 

// Import Redux DevTools → allows debugging state from browser extension
import { composeWithDevTools } from 'redux-devtools-extension';

// Import thunk middleware → allows writing async action creators
import { thunk } from "redux-thunk"

// Create the Redux store
// rootReducer → combined reducer
// composeWithDevTools → integrates middleware with Redux DevTools
// applyMiddleware → adds logger + thunk as middlewares
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk)) // middlewares added here
); 

// Export store so it can be passed into <Provider> in index.js
export default store; 
