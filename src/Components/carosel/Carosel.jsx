import React from 'react';
import "./carousel.css"

const Carosel = (props) => {
    return (
        <div>
            <div
                id="myCarousel"
                className="carousel slide pointer-event"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={0}
                        className=""
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                        className=""
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                        className="active"
                        aria-current="true"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className={"align-content-md-center w-100"}
                             src="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80"
                             alt="First slide"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#">
                                        Sign up today
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className={"d-block w-100"}
                             src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                             alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#">
                                        Learn more
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img className={"d-block w-100"}
                             src="https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                             alt="Third slide"/>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Donec id elit non mi porta gravida at eget metus. Nullam id
                                    dolor id nibh ultricies vehicula ut id elit.
                                </p>
                                <p>
                                    <a className="btn btn-lg btn-primary" href="#">
                                        Browse gallery
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )

}

export default Carosel;