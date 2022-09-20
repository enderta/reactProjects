import React from 'react';

const Navbar = (props) => {

    return (
        <header>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Movies
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>


                        <form className="d-flex" role="search" onSubmit={props.handleSubmit} >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={props.search}
                                onChange={props.handleChange}

                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>

                </div>
            </nav>

        </div>
        </header>
    );
};

export default Navbar;