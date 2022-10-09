import React from 'react';

const Timer = () => {

    //stopwatch code
    const [stopwatch, setStopwatch] = React.useState(0);
    const [stopwatchInterval, setStopwatchInterval] = React.useState(null);

    const startStopwatch = () => {
        setStopwatchInterval(setInterval(() => {
            setStopwatch(stopwatch => stopwatch + 1);
        }, 1000));
    }

    const stopStopwatch = () => {
        clearInterval(stopwatchInterval);
        setStopwatchInterval(null);
    }

    const resetStopwatch = () => {
        setStopwatch(0);

    }

    //timer code
    const [timer, setTimer] = React.useState(0);
    const [timerInterval, setTimerInterval] = React.useState(null);

    const startTimer = () => {
        setTimerInterval(setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000));

    }

    const stopTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(null);
    }

    const resetTimer = () => {
        setTimer(0);

    }

    const handleChange = (event) => {
        setTimer(event.target.value);

    }





    return (
        <div>
            <div className="row" style={{width: '100%', "margin": "3px"}} >
                <div className="col-3">
                    <div className="card" style={{"margin": "2px"}}>
                        <div className="card-body">
                            <h5 className="card-title">Stopwatch</h5>
                            <p className="card-text">Time: {stopwatch}</p>
                            <button className="btn btn-primary" onClick={stopwatchInterval ? stopStopwatch : startStopwatch}>{stopwatchInterval ? 'Stop' : 'Start'}</button>
                            <button className="btn btn-primary" onClick={resetStopwatch}>Reset</button>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card" style={{"margin": "2px"}}>
                        <div className="card-body">
                            <h5 className="card-title">Timer</h5>
                            <p className="card-text">Time: {timer}</p>
                            <button className="btn btn-primary" onClick={timerInterval ? stopTimer : startTimer}>{timerInterval ? 'Stop' : 'Start'}</button>
                            <button className="btn btn-primary" onClick={resetTimer}>Reset</button>
                            <input type="number" value={timer} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}


export default Timer;