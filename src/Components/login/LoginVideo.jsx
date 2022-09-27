import React from 'react';
import './loginvideo.css'

const LoginVideo = () => {
    const [user, setUser] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [search, setSearch] = React.useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "user") {
            setUser(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, password);
    }
    return (
        <div>

                <div className="search">
                    <form onChange={handleSearch}>
                        <input type="text" placeholder="Search" />
                        <button type="submit">Search</button>

                    </form>
                </div>

            <video autoPlay="autoplay" loop='loop' muted>
                <source
                    src={require('../VZ_HD_004_RED.mp4')}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <form onChange={handleChange} onSubmit={handleSubmit}>
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