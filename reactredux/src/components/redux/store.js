import { createStore,applyMiddleware} from "redux"; //ported applyMiddleWareim
import rootReducer from "./rootReducers";
import logger from "redux-logger" // imported logger middleWare
import { composeWithDevTools } from 'redux-devtools-extension';


// create store using pizzaReducer (used createStore for study purpose only)
// passed applyMiddleware as second arguement to createstore
// updated 2nd arguement for redux-dev tools extension
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger))); //passed logger as arguement to applyMiddleWare

export default store; // make store available to the app
