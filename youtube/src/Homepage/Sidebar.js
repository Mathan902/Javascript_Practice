import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
const Sidebar = ()=>{
    const navigate = useNavigate();
    return(
        <div className="sidebar">
            <div className="display-icon">
                <IoMdHome className="menu-icon" onClick={()=> navigate('/')}/> Home
            </div>
            <div className="display-icon">
                <SiYoutubeshorts className="menu-icon" onClick={()=> navigate('/shorts')}/> Shorts
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