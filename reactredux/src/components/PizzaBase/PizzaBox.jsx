import React from 'react'
import "./Pizzabox.css"
import orderPizza from '../redux/pizza/PizzaActions'
import { connect } from 'react-redux'

const PizzaBox = (props) => {

  return (
    <div className='main-div'>
      <h1>No of pizzabases available:{props.pizzabase}</h1>
      <button onClick={props.orderPizza}  >Order Pizza</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pizzabase:state.pizzaBase
  }
}

const mapDispacthToState= (dispatch) =>{
  return {
    orderPizza: ()=> dispatch(orderPizza())
  }
}

export default connect(mapStateToProps,mapDispacthToState)(PizzaBox)