import React from 'react';
import Header from "./Header";

const Episodes = (props) => {
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

    }, []);

    return (
        <div>

        <div className="row" style={{width: '100%', "margin": "3px"}} >
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
};

export default Episodes;