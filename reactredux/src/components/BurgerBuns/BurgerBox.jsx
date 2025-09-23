import React from 'react'
import "./BurgerBox.css"
import orderBurger from '../redux/burger/BurgerActions'
import { connect } from 'react-redux' //importing connect from recat-redux library


//pizzabox react component
const BurgerBox = (props) => {

  return (
    <div className='burger-main-div'>
      <h1>No of Burger-Buns available:{props.burgerBuns}</h1>
      <button onClick={props.orderBurger}  >Order 1 burger</button>
    </div>
  )
}

//mapStateToProps
//Purpose: Read data from the Redux store and pass it to your component as props.
//Think of it like: “What part of the global state does my component care about?”

const mapStateToProps = (state) => {
  return {
    burgerBuns:state.burger.burgerBuns // taking data from store
  }
}


// mapDispatchToProps
// Purpose: Send actions to the Redux store and pass them to your component as props.
// Think of it like: “What actions can my component trigger?”

const mapDispacthToState= (dispatch) =>{
  return {
    orderBurger: ()=> dispatch(orderBurger())  // making action available as a prop
  }
}

// connect : takes your component and gives it access to Redux state and actions as props
export default connect(mapStateToProps,mapDispacthToState)(BurgerBox)