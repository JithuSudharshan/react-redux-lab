import { ORDER_PIZZA } from "./PizzaTypes"; // action type constant

// initial state for this slice
const initialState = {
  pizzaBase: 1000,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA: // when ORDER_PIZZA action is dispatched
      return {
        ...state, // keep other state properties (if any in future)
        pizzaBase: state.pizzaBase - 1, // reduce pizzaBase count
      };
    default:
      return state; // return current state if no matching action
  }
};

// make reducer available to store
export default pizzaReducer; 
