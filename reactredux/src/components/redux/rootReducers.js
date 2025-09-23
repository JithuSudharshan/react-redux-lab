// Import combineReducers helper from Redux
// Purpose: merge multiple reducers into one "root" reducer
import { combineReducers } from "redux";

// Importing individual reducers for different slices of state
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";
import productReducer from "./products/productsReducers";

// combineReducers creates a single root reducer
// Each key represents a "slice" of the global Redux state
const rootReducer = combineReducers({
    pizza: pizzaReducer,    // handles state related to pizza
    burger: burgerReducer,  // handles state related to burgers
    product: productReducer // handles async products (API calls)
})

// Export the root reducer so it can be used in Redux store setup
export default rootReducer;
