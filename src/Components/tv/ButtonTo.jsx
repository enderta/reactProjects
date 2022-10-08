import React from 'react';
import Episodes from "./Episodes";
import * as PropTypes from "prop-types";


function Eps(props) {
    const [eps, setEps] = React.useState([]);
    const [id, setId] = React.useState('1');

    const handleChange = (event) => {
        setId(event.target.value);

    }

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${props.id}/episodes`)
            .then(res => res.json())
            .then(data => {
                setEps(data);
            })

    }
    , []);

    return (
        <div>
            <div className="row" style={{width: '100%', "margin": "3px"}} onClick={handleChange} >
                {eps.map((item) => (
                    <div className="col-3">
                        <div className="card" style={{"margin": "2px"}}>
                            <img src={item.image.medium} className="card-img-top" alt="..."/>
                            <div className="card-body">

                                <div className="card-body">
                                    <h5 className="card-title">Name: {item.name}</h5>
                                    <p className="card-text">Season: {item.season}</p>
                                    <p className="card-text">Episode: {item.number}</p>
                                    <p className="card-text">Airdate: {item.airdate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
}


const ButtonTo = () => {
    const [show, setShow] = React.useState([]);


    const [click, setClick] = React.useState(false);

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {
                setShow(data);
            })
    }
    , []);



    return (
        <div>
            {/*button to go to episodes*/}
          <div className="row" style={{width: '100%', "margin": "3px"}} >
            {show.map((item) => (
                <div className="col-3">
                    <div className="card" style={{"margin": "2px"}}>
                        <img src={item.image.medium} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <p className="card-text">Genres: {item.genres[0]}</p>
                            <p className="card-text">Rating: {item.rating.average}</p>
                            <p className="card-text">Status: {item.status}</p>

                            <button type="button" className="btn btn-primary" onClick={() => setClick(!click)}>Episodes</button>
                            {click ? <Eps id={item.id}/> : null}
                            


                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
    );
}



export default ButtonTo;