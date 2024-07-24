import React from 'react';
import Sidebar from "../containers/Sidebar";
import Navbar from "../containers/Navbar";
import Content from "../containers/Content";
import "./HomePage.css";
import Position from "../containers/Position";

function HomePage() {


    return (
        <div className="body">
            <div className="topBar" />
            <Sidebar />
            <div className="main">
                <Navbar />
                <Position />
                <Content />
            </div>
        </div>
    );
}

export default HomePage;
