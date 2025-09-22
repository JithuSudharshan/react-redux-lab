import { BURGER_BUNS } from "./BurgerTypes";

const initialstate = {
    burgerBuns:750
}

const burgerReducer = (state=initialstate,action)=>{
    switch (action.type) {
        case BURGER_BUNS:
            return {
                ...state,
                burgerBuns:state.burgerBuns-1
            }
        default:
            return state;
    }
}
export default burgerReducer;