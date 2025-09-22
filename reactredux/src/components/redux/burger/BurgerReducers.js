import { BURGER_BUNS } from "./BurgerTypes";

const initialstate = {
    burgerBun:750
}

const burgerReducer = (state=initialstate,action)=>{
    switch (action.type) {
        case BURGER_BUNS:
            return {
                ...state,
                burgerBun:state.burgerBun-1
            }
        default:
            return state;
    }
}
export default burgerReducer;