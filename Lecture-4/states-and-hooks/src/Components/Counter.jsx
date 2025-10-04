import { useState } from "react";

export default function Counter(){
    //we define the variable and setter function then we assign useState
    //to them and add the initial value for the variable as an arg for 
    //the useState function
    let initialState = 0;
    const [counter, setCounter] = useState(initialState);

    return(
        <div>
            <p>Counter: {counter}</p>
            <button onClick={()=> setCounter(counter + 1)}>Add to counter</button>
            <button onClick={()=> setCounter(counter - 1)}>Subtract from counter</button>
            <button onClick={()=> setCounter(initialState)}>Reset</button>
        </div>
    )
}