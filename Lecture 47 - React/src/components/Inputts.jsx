import React, { useState } from 'react'

function Inputts() {
    let [inp, setInp] = useState('');
    function handleInput(e) {
        console.log(e.target.value);
        setInp(e.target.value)
    }
    return (
        <div>
            <h1>{inp}</h1>
            <input onChange={handleInput} type='text' value={inp} />
        </div>
    )
}

export default Inputts