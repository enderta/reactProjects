import React from 'react';
import './loginvideo.css'
const LoginVideo = () => {
    const [user, setUser] = React.useState(null);
    const [password, setPassword] = React.useState(null);


    return (

        <div>

            <video autoPlay="autoplay" loop='loop' muted>
                <source
                    src={require('../Clouds - 64759.mp4')}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <form >
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"

                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"

                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"

                    onClick={(e) => {
                        e.preventDefault();
                        console.log(user, password);
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginVideo;