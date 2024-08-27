import { createStore } from "redux";
import CakeContainer from "./CakeContainer";
import {Provider} from 'react-redux'
import store from "./cake-react-redux/cakeStore";
import CakeContainerUsingHooks from "./CakeContainerUsingHooks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CakeContainerUsingHooks/>
      </div>
    </Provider>
  );
}

export default App;

// const BUY_CAKE = 'BUY_CAKE';
// function buy_cake(){
//   return{
//     type:BUY_CAKE,
//     info:'First redux action'
//   }
// }
// const intialStates = {
//   numOfCakes : 10
// }
// const reducer = (state = intialStates,action)=>{
//   switch(action.type){
//     case BUY_CAKE :
//       return {...state,numOfCakes:state.numOfCakes-1};
//     default:
//       return state;
//   }
// }
// const store = createStore(reducer);
// console.log(store.getState())
// store.dispatch(buy_cake())
// console.log(store.getState())
