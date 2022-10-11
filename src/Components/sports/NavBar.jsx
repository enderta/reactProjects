import React from 'react';
import Logo from './images/logo.png';
import{links} from './data';
import {Link,NavLink} from 'react-router-dom';
import './NavBar.css'
import {GoThreeBars} from 'react-icons/go';
const NavBar = () => {
    return (
        <div>
            <div className="container nav__container">
            <Link to='/' className="logo">
                <img src={Logo} alt="logo" />
            </Link>
            <ul className="nav__links">
                {links.map((link) => {
                    const {id,url,text} = link;
                    return (
                        <li key={id}>
                            <NavLink to={url} className={({isActive})=>isActive? 'active-nav':""}>{text}</NavLink>
                        </li>
                    );
                }
                )}
            </ul>
                <button className={'nav__toggle-btn'}>
                    <GoThreeBars/>
                </button>
            </div>

            
        </div>
    );
};

export default NavBar;