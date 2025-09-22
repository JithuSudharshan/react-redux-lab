import { createStore,applyMiddleware} from "redux"; //ported applyMiddleWareim
import rootReducer from "./rootReducers";
import logger from "redux-logger" // imported logger middleWare


// create store using pizzaReducer (used createStore for study purpose only)
// passed applyMiddleware as second arguement to createstore
const store = createStore(rootReducer,applyMiddleware(logger)); //passed logger as arguement to applyMiddleWare

export default store; // make store available to the app
