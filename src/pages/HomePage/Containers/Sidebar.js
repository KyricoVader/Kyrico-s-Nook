import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../assets/电波_waves.svg';
import avatar from '../../../assets/avatar.jpg';
import down from '../../../assets/下_down.svg';
import right from '../../../assets/右_right.svg';
import { menuList } from "../../../config/Mock";

function Sidebar() {
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [activeSubIndex, setActiveSubIndex] = useState(null);

    const handleMainClick = (index) => {
        if (!menuList[index].subMenu || menuList[index].subMenu.length === 0) {
            setActiveMenuIndex(activeMenuIndex === index ? null : index);
            setActiveSubIndex(null);
        } else {
            setActiveMenuIndex(activeMenuIndex === index ? null : index);
            setActiveSubIndex(null);
        }
    };

    const handleSubClick = (subIndex) => {
        setActiveSubIndex(subIndex);
    };

    return (
        <div className="sidebar">
            <Link to={""} className="logo">
                <img alt="logo" src={logo} className="icon" />
                <h3>Kyrico's Space</h3>
            </Link>
            <div className="user">
                <img src={avatar} alt="Avatar" className="user-avatar" />
                <span className="user-name">KyricoVader</span>
                <span className="user-email">kyricovader@gmail.com</span>
            </div>
            <div className="menu">
                <span className="menu-theme">Main</span>
                {menuList.map((item, index) => (
                    <div key={index}>
                        {item.router ? (
                            <Link to={item.router} className="menu-link">
                                <img src={item.icon} alt={`Menu ${index + 1}`} className="menu-icon" />
                                <span className="menu-title">{item.title}</span>
                            </Link>
                        ) : (
                            <div
                                className={`menu-link ${activeMenuIndex === index ? 'active' : ''}`}
                                onClick={() => handleMainClick(index)}
                            >
                                <img src={item.icon} alt={`Menu ${index + 1}`} className="menu-icon" />
                                <span className="menu-title">{item.title}</span>
                                {item.subMenu && (
                                    <img
                                        src={activeMenuIndex === index ? down : right}
                                        alt="menu-toggle-icon"
                                        className="menu-toggle-icon"
                                    />
                                )}
                            </div>
                        )}
                        {item.subMenu && !item.router && (
                            <div
                                className={`sub-menu`}
                                style={{
                                    maxHeight: activeMenuIndex === index ? `${item.subMenu.length * 30}px` : '0',
                                    transition: `max-height ${item.subMenu.length * (60 - item.subMenu.length * 2.5)}ms ease-out`
                                }}
                            >

                            {item.subMenu.map((subItem, subIndex) => (
                                    <Link
                                        to={subItem.router}
                                        className={`menu-sublink ${activeSubIndex === subIndex ? 'active' : ''}`}
                                        key={subIndex}
                                        onClick={() => handleSubClick(subIndex)}
                                    >
                                        <span className="menu-subtitle">{subItem.title}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
