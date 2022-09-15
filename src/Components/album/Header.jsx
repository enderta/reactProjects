import React from 'react';

function Header(props) {
    return (
        <div>
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">
                                    Add some information about the album below, the author, or any other
                                    background context. Make it a few sentences long so folks can pick
                                    up some informative tidbits. Then, link them off to some social
                                    networking sites or contact information.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#" className="text-white">
                                            Follow on Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            Like on Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white">
                                            Email me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                aria-hidden="true"
                                className="me-2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx={12} cy={13} r={4} />
                            </svg>
                            <strong>Album</strong>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarHeader"
                            aria-controls="navbarHeader"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
            </header>
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-muted">
                            Something short and leading about the collection below—its contents, the
                            creator, etc. Make it short and sweet, but not too short so folks don’t
                            simply skip over it entirely.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">
                                Main call to action
                            </a>
                            <a href="#" className="btn btn-secondary my-2">
                                Secondary action
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
        </div>
    );
}

export default Header;