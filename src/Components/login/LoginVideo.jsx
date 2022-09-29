import React from 'react';
import './loginvideo.css'

const LoginVideo = () => {

    const[data,setData]=React.useState({
        user:"",
        password:"",
        search:""
    });


    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "user") {
            setData({ ...data, user: e.target.value })
        } else if (e.target.name === "password") {
            setData({ ...data, password: e.target.value })
        }
        else if (e.target.name === "search") {
            setData({ ...data, search: e.target.value })
        }
    }

    return (
        <div>
            <video autoPlay="autoplay" loop='loop' muted>
                <source
                    src={require('../VZ_HD_004_RED.mp4')}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <form onChange={handleChange} >
                <input
                    type="text"
                    placeholder="Username"
                    name="user"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>


    );
};

export default LoginVideo;