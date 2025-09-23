import { REQUEST_ERROR, REQUEST_FETCH, REQUEST_SUCCESS } from "./productsTypes"

const requestFetch=()=>{
    return{
        type:REQUEST_FETCH
    }
}

const requestSuccess=(products)=>{
    return{
        type:REQUEST_SUCCESS,
        payload:products
    }
}

const requestError=(error)=>{
    return{
        type:REQUEST_ERROR,
        paload:error
    }
}

export default {
    requestFetch,
    requestSuccess,
    requestError
}