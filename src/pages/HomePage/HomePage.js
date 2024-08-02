import React, {useState} from 'react';
import "./HomePage.css";
import Sidebar from "./Containers/Sidebar";
import Navbar from "./Containers/Navbar";
import {Outlet} from "react-router";

const HomePage = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(prevState => !prevState);
    };

    return (
        <div className="home-page">
            <div className="background-bar" />
            <div className={`sidebar-control ${!isSidebarVisible ? 'hidden' : ''}`}>
                <Sidebar />
            </div>
            <div className={`main-page ${!isSidebarVisible ? 'hidden' : ''}`}>
                <Navbar onToggleSidebar={toggleSidebar} />
                <Outlet/>
            </div>
        </div>
    );
};

export default HomePage;
