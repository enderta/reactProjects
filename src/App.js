import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "./Components/alarmClock/Timer";
import NavbarTrvl from "./Components/trvl/NavbarTrvl";
import Hero from "./Components/trvl/Hero";

const App = () => {

    return (
        <div>
<NavbarTrvl />
            <Hero />
        </div>
    );
};

export default App;