import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./Header";
import Episodes from "./Episodes";

const MainTv = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"  >Home</a>

                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/episodes" element={<Episodes />} />
            </Routes>


        </div>


    );
};

export default MainTv;