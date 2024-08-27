import { connect } from "react-redux";
import { buy_cake } from "./cake-react-redux/cakeAction";

const CakeContainer = (props)=>{
    return(
        <div>
            <h1>Number of cakes : {props.number_of_cakes}</h1>
            <button onClick={props.buyCake}>Buy Cake </button>
        </div>
    );
}
const mapStateProps = (state )=>{
    return {
        number_of_cakes : state.number_of_cakes
    }
}
const mapDisptachProps = (disptach)=>{
    return{
        buyCake : ()=> disptach(buy_cake())
    }
}
export default connect(mapStateProps,mapDisptachProps)(CakeContainer);