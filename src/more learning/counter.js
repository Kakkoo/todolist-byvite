import React, { useState} from "react";

function counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
    setCount(count -1);
    }
    const reset = () => {
        setCount(count = 0);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}
export default counter;

