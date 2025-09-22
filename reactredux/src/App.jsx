import './App.css';
import PizzaBox from './components/PizzaBase/PizzaBox';
import { Provider } from 'react-redux';
import store from './components/redux/store';
// import HooksContainer from './components/redux/HooksContainer';
import BurgerBox from './components/BurgerBuns/BurgerBox';

function App() {
  return (
    <div className="App">
      {/* Provider makes the Redux store available to all components */}
      <Provider store={store}>
        {/*Component connected to Redux*/}
        <PizzaBox />   
        {/* <HooksContainer/>  */}
        <BurgerBox />
      </Provider>
    </div>
  );
}

export default App;
