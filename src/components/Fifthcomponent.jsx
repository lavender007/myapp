import { useState } from "react";
const Fifthcomponent = () => {

    // Te useState() hook enables us to create dynamic websites whereby it usually as the start/initial state followed by a state that get shown when some effects happen on our website

    const [number, setNumber] = useState(10)

    
    return(
        <div className="Fifthcomponent">

            {/*Below we bind our value for number */}
            <h1>Welcome to MY Fifth component</h1>

            <h2>Current number is: {number}</h2>

            {/*Call  the set number  function to update the number after click effect*/}
            <button onClick = { () => setNumber(20)}> Click to update the Number </button>


        </div>
    )
}


export default Fifthcomponent;

// Create a sixthcomponent . inside of it have the UseState with the initial value of weight being 50 kgs have a button to update the weight to 55kgs when the button is clicked . Render the component on APP.js 

// Resarch on routing 