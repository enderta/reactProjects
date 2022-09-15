import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus, faRedo} from "@fortawesome/free-solid-svg-icons";
function Dem(props) {
    const [count, setCount] = React.useState(0);
    const handlePlus = () => {
        setCount(count + 1);

    }
    const handleMinus = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handlePlus}><FontAwesomeIcon icon={faPlus}/></button>

            <button onClick={handleMinus}><FontAwesomeIcon icon={faMinus}/></button>
            <button onClick={handleReset}><FontAwesomeIcon icon={faRedo}/></button>


        </div>
    );
}

export default Dem;