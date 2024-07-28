import React, { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(0)
    function handleClickPlus() {
        // Batching Concept -> only one time rerender hoga na ki teen baar
        // setCounter(counter + 1) // 0 + 1
        // setCounter(counter + 1) // 0 + 1
        // setCounter(counter + 1) // 0 + 1

        // right way to write the above statements
        setCounter((counter) => counter + 1) // 0 + 1 = 1
        setCounter((counter) => counter + 1) // 1 + 1 = 2
        setCounter((counter) => counter + 1) // 2 + 1 = 3
    };

    function handleClickMinus() {
        // setCounter(counter - 1) // 0 - 1
        // setCounter(counter - 1) // 0 - 1
        // setCounter(counter - 1) // 0 - 1

        // right way to write the above statements
        setCounter((counter) => counter - 1)
        setCounter((counter) => counter - 1)
        setCounter((counter) => counter - 1)

    }
    return (
        <div>
            <button onClick={handleClickPlus}><h1> + </h1></button>
            <h1>
                {counter}
            </h1>
            <button onClick={handleClickMinus}><h1> - </h1></button>
        </div>
    )
}

export default Counter


// all setFunctions are async functions