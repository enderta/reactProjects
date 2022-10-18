import React from 'react';

const NaviBar = () => {
    return (
       <header>
           <nav className="navbar navbar-expand-lg bg-light" style={{"background":"white"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"  >Home</a>
                    <a className="navbar-brand" href="/about"  >About</a>
                    <a className="navbar-brand" href="/series"  >Series</a>
                </div>


           </nav>
         </header>
    );
};

export default NaviBar;