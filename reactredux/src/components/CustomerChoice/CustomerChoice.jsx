import React, { useState } from 'react'
import "./CustomerChoice.css"
import orderBurger from '../redux/burger/BurgerActions' // import action creator function
import { connect } from 'react-redux' // connect allows React component to interact with Redux store

// CustomerChoice React component
const CustomerChoice = (props) => {

  // Local state to track how many burgers user wants to order
  const [number, setNumber] = useState(1);

  return (
    <div className='main-div'>
      {/* Display current burger buns available from Redux store */}
      <h1>No of Burger-Buns available: {props.burgerBuns}</h1>

      {/* Input field to accept number of burgers to order */}
      <input 
        type="text" 
        className='input-field' 
        value={number} 
        placeholder='Enter your Number' 
        onChange={(e) => setNumber(e.target.value)} // update local state on input change
      />

      {/* Button triggers Redux action to order burgers */}
      <button onClick={() => props.orderBurger(number)}>Order burger</button>
    </div>
  )
}

// Map state from Redux store to props for this component
const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns // get burger buns count from store
  }
}

// Map dispatch actions to props
const mapDispacthToState = (dispatch) => {
  return {
    // dispatch action with number of burgers as payload
    orderBurger: (number) => dispatch(orderBurger(number))  
  }
}

// Connect component to Redux store (state + dispatch)
export default connect(mapStateToProps, mapDispacthToState)(CustomerChoice)
