import "./NavBar.css";
import { CiMenuBurger } from "react-icons/ci";
const NavBar = () => {
  return (
    <>
      
      <div className="container">
        <div className="navbar-icon">
          <CiMenuBurger/>
        </div>
        <div className="navigation-button">Home</div>
        <div className="navigation-button">About</div>
        <div className="navigation-button">Contact</div>
      </div>
      <div className="body-container">
          hiiigerg
      </div>
    </>
  );
};
export default NavBar;
