import React, {useState} from 'react';
import Row from "react-bootstrap/Row";

const InfoCard = (props) => {
    //grid card
    const [viewbtn, setView] = useState(false);
    const handleView = () => {
        setView(!viewbtn);

    }
    const [showAge, setShowAge] = useState(false);
    return (
        <div >
          {/*gird layout for cards */}
            <Row xs={1} md={4} className="g-4">
                <div className="col">
                    <div className="card shadow-sm" >
                        <img src={props.avatar} alt="product" style={{"height":"300px","width":"300px"}}  />
                        <div className="card-body">
                            <p className="card-text">{props.email}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">

                                    <button onClick={handleView}>View</button>
                                    {viewbtn && <p className="card-text">{props.name}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>


        </div>
    );
};


export default InfoCard;