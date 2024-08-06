import React, { useRef, useState } from 'react'

// function Refs() {
//     let [salary, setSalary] = useState(2000)
//     let spanEL = useRef()
//     setTimeout(() => {
//         // let h1 = document.querySelector('h1') //this is not a good way
//         // h1.innerHTML = '200'
//         spanEL.current.innerHTML = '200'
//     }, 2000);
//     return (
//         <div>
//             <h1>Salary : <span ref={spanEL}>{salary}</span> </h1>
//         </div>
//     )
// }

// --------------

function Refs() {

    let counter = useRef(0)
    function handleRef() {
        console.log('Main hun useRef');
        counter.current++
    }


    let [count, setCount] = useState(0);
    function handleCount() {
        console.log('Main hun useState');
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleCount}>Counter - {count}</button>
            <button onClick={handleRef}>Counter2 - {counter.current}</button>
        </div>
    )
}

export default Refs