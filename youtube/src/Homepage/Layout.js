import Header from "./Header";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import './Layout.css';

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="body-container">
                <Sidebar />
                <Blogs/>
            </div>
        </div>
    );
};

export default Layout;
