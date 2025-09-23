import './App.css';
import PizzaBox from './components/PizzaBase/PizzaBox';
import { Provider } from 'react-redux';
import store from './components/redux/store';
// import HooksContainer from './components/redux/HooksContainer';
import BurgerBox from './components/BurgerBuns/BurgerBox';
import CustomerChoice from './components/redux/CustomerChoice/CustomerChoice';

function App() {
  return (
    <div className="App">
      {/* Provider makes the Redux store available to all components */}
      <Provider store={store}>
        {/*Component connected to Redux*/}
        <PizzaBox />   
        {/* <HooksContainer/>  */}
        <BurgerBox />
        <CustomerChoice />
      </Provider>
    </div>
  );
}

export default App;
