import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
// import axios from 'axios';

import './Navbar.css'
import search from '../../../assets/搜索_search.svg';
import toggle from '../../../assets/汉堡图标_hamburger-button.svg';
import {navbarMenu} from "../../../config/Mock";




function Navbar({ onToggleSidebar }){

        const [searchValue, setSearchValue] = useState('');
        const navigate = useNavigate();

        const handleInputChange = (event) => {
            setSearchValue(event.target.value);
        };

        const handleSearch = async () => {
            try {
                // const response = await axios.post('/your-backend-endpoint', { query: searchValue });
                // const data = response.data;

                // 假设 navbarMenu 是一个状态，你需要在这里更新它
                // setnavbarMenu(data.newIcon); // 根据实际情况更新状态

                // 假设你在一个父组件中管理 navbarMenu 的状态
                // props.setnavbarMenu(data.newIcon); // 如果你通过 props 传递这个函数

                navigate('/search');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                handleSearch().then();
            }
        };

    return(
        <div className="navbar">
            <div className='navbar-toggle'>
                <img
                    src={toggle}
                    alt="toggle"
                    className="navbar-toggle-img"
                    onClick={onToggleSidebar}
                />
            </div>
            <div className='navbar-search'>
                <input
                    className="navbar-search-input"
                    placeholder="搜索中..."
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <img
                    src={search}
                    alt="search-icon"
                    className="navbar-search-icon"
                    onClick={handleSearch}
                />
            </div>
            <div className="navbar-function-container">
                {navbarMenu.map((icon, index) => (
                    <Link to="/home-page" className="navbar-function" key={index}>
                        <img src={icon} alt={`function-icon ${index + 1}`} className="navbar-function-icon" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;