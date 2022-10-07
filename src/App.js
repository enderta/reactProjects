import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Components/contact/Card";
import LoginVideo from "./Components/login/LoginVideo";
import Header from "./Components/tv/Header";
import DropDown from "./Components/tv/DropDown";
import Episodes from "./Components/tv/Episodes";
import MainTV from "./Components/tv/MainTV";

const App = () => {

    return (
        <div>
           <MainTV/>
        </div>
    );
};

export default App;