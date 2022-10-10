import React from 'react';
import button from "bootstrap/js/src/button";
import './NavbarTrvl.css';

const NavbarTrvl = () => {

const [click, setClick] = React.useState(false);


const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <div>
                <nav className="navbar">
                    <div className="navbar-container">
                        <a href="/" className="navbar-logo">
                            TRVL <i className="fab fa-typo3" />
                        </a>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                    Products
                                </a>
                            </li>
                            <li className="nav-btn">
                                {button && <button className='btn--outline'>SIGN UP</button>}
                            </li>
                        </ul>
                    </div>





                </nav>
            </div>
        </div>
    );
};

export default NavbarTrvl;