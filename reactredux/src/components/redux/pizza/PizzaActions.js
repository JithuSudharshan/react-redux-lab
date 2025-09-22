import { ORDER_PIZZA } from "./PizzaTypes.js";

//Action creator
const orderPizza = () => {
  return {
    type: ORDER_PIZZA,
  };
};

export default orderPizza;
