// Importing action type constants (to avoid typos)
import { REQUEST_ERROR, REQUEST_FETCH, REQUEST_SUCCESS } from "./productsTypes";

// Initial state of the product reducer
// loading → indicates if API call is in progress
// products → stores list of products
// error → stores error message if API fails
const initialState = {
    loading: false,
    products: [],
    error: false
}

// Reducer function: decides how state changes based on action type
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        // Case 1: When request starts (loading true, no products yet)
        case REQUEST_FETCH:
            return {
                ...state,     // copy existing state
                loading: true // API call started
            }

        // Case 2: When request succeeds
        case REQUEST_SUCCESS:
            return {
                ...state,               // copy existing state
                loading: false,         // API finished
                products: action.payload, // store products from API
                error: false            // reset error (if any from previous call)
            }

        // Case 3: When request fails
        case REQUEST_ERROR:
            return {
                ...state,              // copy existing state
                loading: false,        // API finished
                error: action.payload  // store error message
            }

        // Default: if action type doesn’t match, return current state unchanged
        default:
            return state;
    }
}

// Export reducer to be combined in Redux store
export default productReducer;
