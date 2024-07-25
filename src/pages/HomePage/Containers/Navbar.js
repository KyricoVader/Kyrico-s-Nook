import {Link} from "react-router-dom";
import './Navbar.css'

import search from '../../../assets/搜索_search.svg';
import toggle from '../../../assets/汉堡图标_hamburger-button.svg';
import engilsh from '../../../assets/英文_english.svg';
import message from '../../../assets/已读邮件_mail-open.svg';
import translate from '../../../assets/翻译_translate.svg';


const navbarIcon = [toggle,engilsh,translate,message];

function Navbar(){
    return(
        <div className="navbar">
            <div className='navbar-toggle'>
                <Link to="/home-page">
                    <img src={toggle} alt="toggle" className="navbar-toggle-img" />
                </Link>
            </div>
            <div className='navbar-search'>
                <input className="navbar-search-input" placeholder="搜索中..." />
                <img src={search} alt="search-icon" className="navbar-search-icon" />
            </div>
            <div className="navbar-function-container">
                {navbarIcon.map((icon, index) => (
                    <Link to="/home-page" className="navbar-function" key={index}>
                        <img src={icon} alt={`function-icon ${index + 1}`} className="navbar-function-icon" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Navbar;