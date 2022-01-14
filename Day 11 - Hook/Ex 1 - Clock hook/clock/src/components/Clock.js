import React, { useState, useEffect } from 'react';
function Clock() {
    let today = new Date();
    let [currentTime, setCurrentTime] = useState(today);
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);
    return (
        <div>
            <h1>{currentTime.toUTCString()}</h1>
        </div>
    )
}
export default Clock;