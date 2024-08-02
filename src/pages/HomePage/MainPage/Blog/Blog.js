import React from 'react';
import './Blog.css';
import {Outlet} from "react-router";
import Position from "./Position";

function Blog() {
    return (
        <div className="blog">
            <Position/>
            <Outlet/>
        </div>
    );
}

export default Blog;
