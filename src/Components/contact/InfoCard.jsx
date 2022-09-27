import React, {useState} from 'react';

const InfoCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    return (
        <div>
            <div className="container">
                <div className="card ">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={props.avatar} alt="avatar" className="img-fluid"/>
                            </div>
                            <div className="col-md-9">
                                {<p>name: {props.name}</p>}
                                <button className="btn btn-primary" onClick={() => setShowAge(!showAge)}>
                                    {showAge ? 'Hide info' : 'Show info'}
                                </button>
                                {showAge && <p>email: {props.email}</p>}
                                {showAge && <p>age: {props.age}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;