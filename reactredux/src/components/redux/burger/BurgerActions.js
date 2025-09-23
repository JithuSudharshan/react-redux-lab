import { ORDER_BURGER } from "./BurgerTypes";

const orderBurger=(number=1)=>{
    return {
        type:ORDER_BURGER,
        payload:number
    }
}
export default orderBurger;