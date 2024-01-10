// to use state, we need hooks
import {useState} from 'react';

function Card(props) {
    const [myName, setMyName] = useState ('Ariel');
    const [counter, setCounter] = useState(0);


    function clickChangeName () {
        // set name to new name
        console.log('Test');
        setMyName('ARIEL');
    }

    function handleClick1 () {
        setCounter(counter + 1);

    };

    return (
        <div className="card">
           <button onClick={handleClick1}>Count</button>
           <p>Count: {counter}</p>
          <p>{props.globalName ? props.globalName : myName}</p>
          <button onClick={clickChangeName}>Change Name</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
    );
}


export default Card;
