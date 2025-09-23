// Importing action types (constants) to avoid typos in action names
import { REQUEST_ERROR, REQUEST_FETCH, REQUEST_SUCCESS } from "./productsTypes"
import axios from "axios"

// Action creator: when the request starts
// Purpose: set loading = true in the reducer
const requestFetch = () => {
    return {
        type: REQUEST_FETCH
    }
}

// Action creator: when request is successful
// Purpose: send products data to reducer
const requestSuccess = (products) => {
    return {
        type: REQUEST_SUCCESS,
        payload: products // payload contains array of product titles
    }
}

// Action creator: when request fails
// Purpose: send error message to reducer
const requestError = (error) => {
    return {
        type: REQUEST_ERROR,
        payload: error // payload contains error message
    }
}

// Async action creator using redux-thunk
// Instead of returning an action object directly,
// it returns a function that receives dispatch as argument.
export const fetchProducts = () => {

    return (dispatch) => {
        // Step 1: Dispatch fetch request (loading state)
        dispatch(requestFetch())

        // Step 2: Make API call using axios
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                // Step 3: Extract product titles from response
                const products = res.data.map(product => product.title)
                console.log(products)

                // Step 4: Dispatch success action with products
                dispatch(requestSuccess(products))
            })
            .catch(error => {
                // Step 5: If request fails, dispatch error action
                const errorMsg = error.message
                dispatch(requestError(errorMsg))
            })
    }
}
