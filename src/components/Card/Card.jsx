// to use state, we need hooks
import {useState} from 'react';

function Card(props) {
    const [myName, setMyName] = useState ('Ariel');

    function clickChangeName () {
        // set name to new name
        console.log('Test');
        setMyName('ARIEL');
    };

    return (
        <div className="card">
           {/*homework is to create a state to increment the count*/} 
          <button> count is 0 </button>
          <p>{props.globalName ? props.globalName : myName}</p>
          <button onClick={clickChangeName}>Change Name</button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
    );
}

export default Card;