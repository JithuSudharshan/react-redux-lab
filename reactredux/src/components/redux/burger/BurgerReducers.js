import { ORDER_BURGER } from "./BurgerTypes";

const initialstate ={
    burgerBuns:750
}

const burgerReducer = (state=initialstate,action)=>{
    switch (action.type) {
        case ORDER_BURGER:
            return {
                ...state,
                burgerBuns:state.burgerBuns-action.payload
            }
        default:
            return state;
    }
}
export default burgerReducer;