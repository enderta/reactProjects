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
            <table className="table  table-dark table-striped">
                <thead>
                <tr>
                    <th className={"border border-dark"}>Name</th>
                    <th className={"border border-dark"}>Age</th>
                    <th className={"border border-dark"}>Address</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={"border border-dark"}>Nguyen Van A</td>
                    <td className={"border border-dark"}>20</td>
                    <td className={"border border-dark"}>Ha Noi</td>
                </tr>
                <tr>
                    <td className={"border border-dark"}>Nguyen Van B</td>
                    <td className={"border border-dark"}>21</td>
                    <td className={"border border-dark"}>Ha Noi</td>
                </tr>
                </tbody>
            </table>



        </div>
    );
}

export default Dem;