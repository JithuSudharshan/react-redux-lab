import { createStore } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";

// create store using pizzaReducer (used createStore for study purpose only)
const store = createStore(pizzaReducer);

export default store; // make store available to the app
