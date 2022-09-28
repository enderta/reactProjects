import React from 'react';
import './card.css'
const GridCard = (props) => {

    const [showInfo,setShowInfo]=React.useState(false)
    const handleClick=(e)=>{
        e.preventDefault()
        setShowInfo(true)
    }
    return (
        <div>
            <div>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >


                                    <div className="col">
                                        <div className="card shadow-sm" >
                                            <img src={props.avatar} alt="product" style={{"height":"300px","width":"300px"}}  />
                                            <div className="card-body">
                                                <p className="card-text">{props.email}</p>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button onClick={() => setShowInfo(!showInfo)} className="btn btn-primary">Show Info</button>
                                                        {showInfo && <p className="card-text">{props.name}</p>}
                                                        {showInfo && <p className="card-text">{props.email}</p>}
                                                        {showInfo && <p className="card-text">{props.age}</p>}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GridCard;