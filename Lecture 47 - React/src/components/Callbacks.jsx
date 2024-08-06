import React, { memo, useCallback, useState } from 'react'

// function Callbacks() {
//     let [count, setCount] = useState(0)
//     function handleClick() {
//         setCount(count + 1);
//     }
//     let a = function () {
//         console.log('Bhauakaal');
//     }
//     return (
//         <div>
//             <Sam b={a} />
//             <button onClick={handleClick}>Counter - {count}</button>
//         </div>
//     )
// }

// // is situation main memo kaam nhi ayegi because props are different
// let Sam = memo(function ({ b }) {
//     console.log('Main chal gya');
//     return (
//         <h1>Tamatar - {b()}</h1>
//     )
// })



// export default Callbacks


// ----------------

function Callbacks() {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1);
    }
    // useCallback function 
    let a = useCallback(function () {
        console.log('Bhauakaal');
    }, [])

    return (
        <div>
            <Sam b={a} />
            <button onClick={handleClick}>Counter - {count}</button>
        </div>
    )
}

let Sam = memo(function ({ b }) {
    console.log('Main chal gya');
    return (
        <h1>Tamatar - {b()}</h1>
    )
})

export default Callbacks