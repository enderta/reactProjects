import React, {useState} from 'react';

const InfoCard = (props) => {
    const [showAge, setShowAge] = useState(false);
    return (
        <div >
            <div className="container ">
                <div className="card  p-3 mb-2 bg-warning" style={{ maxWidth: "50rem" }}>
                   {/* <div className="card-header">{props.name}</div>*/}
                    <div className="card-body">
                        <img src={props.avatar} alt="avatar" />
                        <p className="card-text">{props.email}</p>
                        <button onClick={() => setShowAge(!showAge)} className="btn btn-primary">Show Info</button>
                        {showAge && <p className="card-text">{props.name}</p>}
                        {showAge && <p className="card-text">{props.email}</p>}
                        {showAge && <p className="card-text">{props.age}</p>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;