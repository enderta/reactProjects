import React, {useEffect, useState} from 'react';
import './card.css'
import InfoCard from "./InfoCard";
import GridCard from "./GridCard";
import Tables from "../album/Tables";

const Card = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {
                setContacts(data.results);
            });
    }, []);
    console.log(contacts);
    return (
        <>
            {contacts.map((contact) => (
                <InfoCard

                    avatar={contact.picture.large}
                    name={contact.name.first + ' ' + contact.name.last}
                    email={contact.email}
                    age={contact.dob.age}

                />
            ))}
        </>

    );

};

export default Card;