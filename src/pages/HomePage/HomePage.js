import React from 'react';
import "./HomePage.css";
import Sidebar from "./Containers/Sidebar";
import Navbar from "./Containers/Navbar";
import MainContent from "./Containers/MainContent";
import SubContent from "./Containers/SubContent";

function HomePage() {


    return (
        <div className="home-page">
            <div className="background-bar" />
            <Sidebar/>
            <div className="main-page">
                <Navbar/>
                <SubContent/>
                <MainContent/>
            </div>
        </div>
    );
}

export default HomePage;
