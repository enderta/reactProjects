import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
        <div>
            <div className="hero-container">
                <video src='./videos/video-2.mp4' autoPlay loop muted />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <button className='btns' >
                        GET STARTED
                    </button>
                    <button className="btns" >
                        WATCH TRAILER <i className="far fa-play-circle" />
                    </button>
                </div>
            </div>
        </div>
    );
}



export default Hero;