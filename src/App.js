import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "./Components/alarmClock/Timer";
import NavbarTrvl from "./Components/trvl/NavbarTrvl";
import Hero from "./Components/trvl/Hero";
import NavBar from "./Components/sports/NavBar";
import MainShow from "./Components/tv/MainShow";
import NaviBar from "./Components/navBarRouter/NaviBar";
import MainTv from "./Components/tv/MainTV";

const App = () => {
    const [dogPic, setDogPic] = React.useState("https://images.dog.ceo/breeds/terrier-dandie/n02096437_2605.jpg");

    const handleClick = () => {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogPic(data.message);

            });
    }
    return (

        <div>
        <button onClick={handleClick}>Click for a new dog!</button>
        <img src={dogPic} alt="A Random Dog" />
        </div>
    );
};

export default App;