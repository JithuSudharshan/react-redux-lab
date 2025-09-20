import { ORDER_PIZZA } from "./PizzaActions";

const initialState = {
  pizzabase: 1000,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzabase: state.pizzabase - 1,
      };
    default:
      state;
  }
};

export default pizzaReducer;
