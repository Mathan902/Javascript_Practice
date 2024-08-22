import React, { useState, useEffect, useContext } from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Blogs from "./Blogs";
import './Layout.css';
import SidebarNavigator from './SidebarNavigator';
import { Store } from '../store';
import MyRoutes from '../MyRoutes';

const Layout = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 768px)").matches);

    useEffect(() => {
        const handleResize = (event) => {
            setIsLargeScreen(event.matches);
        };
        const mediaQueryList = window.matchMedia("(min-width: 768px)");
        mediaQueryList.addEventListener('change', handleResize);

        return () => {
            mediaQueryList.removeEventListener('change', handleResize);
        };
    }, []); 

    const {sidebar} = useContext(Store);

    return (
        <div className="container">
            <Header />
            <div className="body-container">
                {
                    isLargeScreen ? <Sidebar /> : null 
                }
                {
                    sidebar && <div className="overlay"><SidebarNavigator /></div>
                }
                <MyRoutes></MyRoutes>
            </div>
        </div>
    );
};

export default Layout;