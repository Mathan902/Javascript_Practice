import { useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const loginStatus = useSelector(state => state.user.loginStatus);
    console.log(loginStatus);
    return (
        <div style={{display:"flex",justifyContent:'center',position:'fixed',top:0,width:'100%',gap:'5%',padding:'20px',backgroundColor:'white'}}>
            <div style={{display:"flex",justifyContent:'start',flex:'1',gap:'15px',alignItems:''}} >
                <div className="cursor-pointer" onClick={()=>{navigate('/')}}>Post</div>
                <div className="cursor-pointer" onClick={()=>{navigate('/author')}}>Authors</div>
            </div>
            <div style={{display:"flex",justifyContent:'end',flex:'1',alignItems:'center'}}>
                {loginStatus ? <MdAccountCircle style={{fontSize:'25px'}} className="cursor-pointer"/> : <div className="cursor-pointer">Login</div>}
            </div>
        </div>
    );
};

export default Header;
