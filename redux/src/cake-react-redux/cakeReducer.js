import { BUY_CAKE } from "./cakeType";

const intialValues = {
    number_of_cakes : 10
}
const CakeReducer = (state = intialValues ,action) => {
    switch(action.type){
        case BUY_CAKE :
            return {...state,number_of_cakes : state.number_of_cakes-1};
        default:
            return state;
    }
}
export default CakeReducer;