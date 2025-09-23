import { REQUEST_ERROR, REQUEST_FETCH, REQUEST_SUCCESS } from "./productsTypes";

const initialState = {
    loading:false,
    products:[],
    error:false
}

const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case REQUEST_FETCH:
            return {
                ...state,
                loading:true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload
                
            }
        case REQUEST_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }   
        default:
            return state;
    }
}

export default productReducer;