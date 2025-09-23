import React from 'react'
import "./HooksContainer.css"
import { useSelector, useDispatch } from 'react-redux' 
// useSelector ~ replaces mapStateToProps
// useDispatch ~ replaces mapDispatchToProps

import orderPizza from '../redux/pizza/PizzaActions'

// pizzabox react component
const HooksContainer = () => {

    // useSelector pulls data directly from Redux store state
    // same as mapStateToProps(state) => { pizzaBase: state.pizzaBase }
    const pizzaBase = useSelector(state => state.pizzaBase)

    //useDispatch gives access to dispatch function
    // same as mapDispatchToProps(dispatch) => { orderPizza: () => dispatch(orderPizza()) }
    const dispatch = useDispatch()

    return (
        <div className='hooks-  main-div'>
            <h1>No of pizzabases available: {pizzaBase}</h1>
            
            {/*     dispatching an action with useDispatch
                 same as props.orderPizza() when using connect */}
            <button onClick={() => dispatch(orderPizza())}>
                Order Pizza
            </button>
        </div>
    )
}

export default HooksContainer
