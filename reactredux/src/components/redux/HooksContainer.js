import React from 'react'
import "../PizzaBase/Pizzabox.css"
import { useSelector,useDispatch } from 'react-redux'
import orderPizza from './pizza/PizzaActions'



//pizzabox react component
const HooksContainer = () => {

    const pizzaBase=useSelector(state=>state.pizzaBase)
    const dispatch = useDispatch()
  return (
    <div className='main-div'>
      <h1>No of pizzabases available:{pizzaBase}</h1>
      <button onClick={()=>dispatch(orderPizza())}  >Order Pizza</button>
    </div>
  )
}


export default HooksContainer