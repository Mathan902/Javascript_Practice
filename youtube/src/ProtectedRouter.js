import { useSelector } from "react-redux";
import MyRoutes from "./MyRoutes";
import Login from "./Login";

const ProtectedRouter = ()=>{
    const loginStatus = useSelector(state => state.loginStatus);
    return (
        loginStatus ? <MyRoutes/> : <Login/>
    )
}
export default ProtectedRouter;