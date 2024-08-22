import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import './SidebarNavigator.css';
import Logo from './8gzcr6RpGStvZFA2qRt4v6.jpg';
import { useContext } from "react";
import { Store } from "../store";
const SidebarNavigator = ()=>{
    const { sidebar, dispatch } = useContext(Store);
    const handleMenuClick = () => {
        dispatch({ type: "action" });
    };
    return(
        <div className="sidebar-nav">
            <div className="left-container">
                <CiMenuBurger className="icon" onClick={handleMenuClick}/>
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="Logo"/>
                </div>
            </div>
            <div className="display-icon">
                <IoMdHome className="menu-icon"/> Home
            </div>
            <div className="display-icon">
                <SiYoutubeshorts className="menu-icon"/> Shorts
            </div>
            <div className="display-icon">
                <MdSubscriptions  className="menu-icon"/> Subscriptions
            </div>
            <div className="display-icon">
            <FaYoutube  className="menu-icon" /> You
            </div>
        </div>
    );
}
export default SidebarNavigator;