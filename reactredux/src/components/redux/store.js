import { createStore } from "redux";
import rootReducer from "./rootReducers";

// create store using pizzaReducer (used createStore for study purpose only)
const store = createStore(rootReducer);

export default store; // make store available to the app
