import React from 'react';
import Header from "./Header";

const Episodes = (props) => {
    const [eps, setEps] = React.useState([]);


    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${props.id}/episodes`)
            .then(res => res.json())
            .then(data => {
                setEps(data);
            })

    }, []);


    return (
        <div>
            <div onClick={props.close} className="close">X</div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="Search"
                                      aria-label="Recipient's username" aria-describedby="button-addon2"
                                        value={props.search}
                                        onChange={props.handleChange}
                            />
                            <div>
                                {
                                    eps.map((item) => (
                                        <div className="card" style={{"margin": "2px"}}>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.summary}</p>
                                            </div>
                                        </div>
                                    ))

                                }

</div>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Episodes;