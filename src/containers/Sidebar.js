import React, { useState } from 'react';
import './Sidebar.css';
import logo from './../assets/电波_waves.svg';
import avatar from './../assets/avatar.jpg';
import code from './../assets/代码_code.svg'
import communication from './../assets/沟通_communication.svg';
import book from './../assets/书籍-打开_book-open.svg';
import chart from './../assets/折线图_chart-line.svg';
import document from './../assets/文档详情_doc-detail.svg';
import video from './../assets/视频_video-two.svg';
import config from './../assets/配置_config.svg';
import me from './../assets/我的_me.svg';
import down from './../assets/下_down.svg'
import right from './../assets/右_right.svg'

const subNavbar = [
    {
        icon: code,
        title: 'Programming',
        subMenu: [
            { title: 'JavaScript' },
            { title: 'Java' },
            { title: 'Python' },
            { title: 'Golang' },
        ]
    },
    { icon: communication, title: 'Chatting' },
    { icon: book, title: 'Learning' },
    { icon: chart, title: 'Data Analysis' },
    { icon: document, title: 'Article' },
    { icon: video, title: 'Movie' },
    { icon: config, title: 'Setting' },
    { icon: me, title: 'Profile' },
];

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeSubIndex, setActiveSubIndex] = useState(null);

    const handleMainClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        setActiveSubIndex(null); // Reset sub-menu selection when toggling main menu
    };

    const handleSubClick = (subIndex) => {
        setActiveSubIndex(subIndex);
    };

    return (
        <div className="sidebar">
            <div className="brand">
                <img alt="logo" src={logo} className="icon" />
                <h3>Kyrico's Space</h3>
            </div>
            <div className="user">
                <div className="avatar">
                    <img src={avatar} alt="Avatar" className="avatar-img" />
                    <span className="avatar-name">KyricoVader</span>
                    <span className="avatar-email">kyricovader@gmail.com</span>
                </div>
            </div>
            <div className="sub-navbar">
                <span className="sub-navbar-theme">Main</span>
                {subNavbar.map((item, index) => (
                    <div key={index}>
                        <div
                            className={`sub-navbar-link ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleMainClick(index)}
                        >
                            <img src={item.icon} alt={`Article ${index + 1}`} className="sub-navbar-icon" />
                            <span className="sub-navbar-title">{item.title}</span>
                            {item.subMenu && (
                                <img
                                    src={activeIndex === index ? down : right}
                                    alt="toggle-icon"
                                    className="toggle-icon"
                                />
                            )}
                        </div>
                        {item.subMenu && (
                            <div
                                className={`sub-menu ${activeIndex === index ? 'open' : ''}`}
                                style={{
                                    maxHeight: activeIndex === index ? `${item.subMenu.length * 30}px` : '0',
                                    transition:'max-height'+ ` ${item.subMenu.length * (60-item.subMenu.length * 2.5)}ms `+'ease-out'
                                }}
                            >
                                {item.subMenu.map((subItem, subIndex) => (
                                    <div
                                        className={`sub-navbar-sublink ${activeSubIndex === subIndex ? 'active' : ''}`}
                                        key={subIndex}
                                        onClick={() => handleSubClick(subIndex)}
                                    >
                                        <span className="sub-navbar-subtitle">{subItem.title}</span>
                                    </div>
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
