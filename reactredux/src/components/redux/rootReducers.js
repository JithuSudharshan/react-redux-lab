import { combineReducers } from "redux";
import pizzaReducer from "./pizza/PizzaReducers";
import burgerReducer from "./burger/BurgerReducers";

const rootReducer = combineReducers({
    pizza:pizzaReducer,
    burger:burgerReducer
})

export default rootReducer;