import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "./Components/alarmClock/Timer";
import NavbarTrvl from "./Components/trvl/NavbarTrvl";
import Hero from "./Components/trvl/Hero";
import NavBar from "./Components/sports/NavBar";
import MainShow from "./Components/tv/MainShow";

const App = () => {

    return (
        <div>
            <MainShow/>
        </div>
    );
};

export default App;