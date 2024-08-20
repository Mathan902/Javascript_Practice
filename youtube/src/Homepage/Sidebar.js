import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
const Sidebar = ()=>{
    return(
        <div className="sidebar">
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
    )
};
export default Sidebar;