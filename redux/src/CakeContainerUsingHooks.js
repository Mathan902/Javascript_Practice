import { useDispatch, useSelector } from "react-redux";
import { buy_cake } from "./cake-react-redux/cakeAction";

const CakeContainerUsingHooks = () => {
    const cakes = useSelector(state => state.number_of_cakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number of cakes: {cakes}</h1>
            <button onClick={() => dispatch(buy_cake())}>Buy Cake</button>
        </div>
    );
}

export default CakeContainerUsingHooks;
