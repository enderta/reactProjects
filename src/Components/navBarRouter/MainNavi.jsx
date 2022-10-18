import React from 'react';
import NaviBar from "./NaviBar";
import {Route, Router, Routes} from "react-router";
import Seasons from "./Seasons";
import Series from "./Series";
import AboutNavi from "./AboutNavi";
import HomeNavi from "./HomeNavi";
import Footer from "./Footer";

const MainNavi = () => {
    return (<div>
        <NaviBar/>
        <Routes>
            <Route path="/" element={<HomeNavi/>}/>
            <Route path="/about" element={<AboutNavi/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/series/:id" element={<Seasons/>}/>
        </Routes>

    <Footer/>

</div>)

};

export default MainNavi;