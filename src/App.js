import React from 'react'
import AirBnB from './Components/airbnb/AirBnB'
import Library from './Components/librar/Library'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Dem from "./Components/dem";
import Album from "./Components/album/Album";
import SignIn from "./Components/album/SignIn";

const App = () => {
    return (
        <div>
           <SignIn />
        </div>
    )
}

export default App