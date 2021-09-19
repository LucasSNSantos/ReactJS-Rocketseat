import { useState } from "react";

export function Button()
{
    const [counter, setCounter] = useState(0);
    function Increment()
    {
        setCounter(counter + 1); 
    }

    return (
        <button onClick={Increment}>{counter}</button>
    )
}

