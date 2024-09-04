import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <div className="mt-20">
                <Outlet/>
            </div>   
        </div>
    );
}
export default AppLayout;