import React from 'react'
import "./Pizzabox.css"
import orderPizza from '../redux/pizza/PizzaActions'
import { connect } from 'react-redux' //importing connect from recat-redux library


//pizzabox react component
const PizzaBox = (props) => {

  return (
    <div className='main-div'>
      <h1>No of pizzabases available:{props.pizzabase}</h1>
      <button onClick={props.orderPizza}  >Order Pizza</button>
    </div>
  )
}

//mapStateToProps
//Purpose: Read data from the Redux store and pass it to your component as props.
//Think of it like: “What part of the global state does my component care about?”

const mapStateToProps = (state) => {
  return {
    pizzabase:state.pizzaBase  // taking data from store
  }
}


// mapDispatchToProps
// Purpose: Send actions to the Redux store and pass them to your component as props.
// Think of it like: “What actions can my component trigger?”

const mapDispacthToState= (dispatch) =>{
  return {
    orderPizza: ()=> dispatch(orderPizza())  // making action available as a prop
  }
}

// connect : takes your component and gives it access to Redux state and actions as props
export default connect(mapStateToProps,mapDispacthToState)(PizzaBox)