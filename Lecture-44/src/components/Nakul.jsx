import React from 'react'

function Nakul() {
    let rn = Math.floor(Math.random() * 10)
    // let el;
    // if (rn === 7) {
    //     el = <h1>Lucky 7</h1>
    // } else {
    //     el = <h1>Better Luck Next Time</h1>
    // }
    return (
        <div>
            {rn}
            {(rn === 7) ? <h1>Lucky 7</h1> : <h1>Better Luck Next Time</h1>}
        </div>
    )
}

export default Nakul