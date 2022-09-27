import React from 'react';
import './card.css'

const Card = () => {
    const [showAge, setShowAge] = React.useState(false);
    const [contacts, setContact] = React.useState([])
    React.useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())

            .then(json => setContact(json.results)

            )
    }, [])



    console.log(contacts)
    return (
  <>
        <div className="container">
            {
                contacts.map(contact => (
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={contact.picture.large} alt="user" className="img-fluid" />
                                </div>
                                <div className="col-md-9">
                                    <h4>{contact.name.first} {contact.name.last}</h4>
                                    <p>{contact.email}</p>
                                    <p>{contact.phone}</p>
                                    <p>{contact.location.city}</p>
                                    <p>{contact.location.country}</p>
                                    <button className="btn btn-primary" onClick={() => setShowAge(!showAge)}>Show Age</button>
                                    {showAge && <p>{contact.dob.age}</p>}

                                </div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>

  </>
    );
};

export default Card;