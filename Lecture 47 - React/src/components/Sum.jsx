import React, { useMemo, useState } from 'react'

// function Sum() {
//     let [count, setCount] = useState(0)
//     let [inp, setInp] = useState(0)

//     function handleCount() {
//         setCount(count + 1)
//     }

//     function handleChange(e) {
//         setInp(e.target.value)
//     }

//     let ans = 0;
//     for (let i = 1; i <= inp; i++) {
//         ans = ans + i
//     }





//     return (
//         <div>
//             <h1>Sum : {ans}</h1>
//             <input onChange={handleChange} type='number' value={inp} />
//             <button onClick={handleCount}>Counter - {count}</button>

//         </div>
//     )
// }

// export default Sum

// using useMemo()


function Sum() {
    let [count, setCount] = useState(0)
    let [inp, setInp] = useState(0)

    function handleCount() {
        setCount(count + 1)
    }

    function handleChange(e) {
        setInp(e.target.value)
    }
    let out = useMemo(function () {
        let ans = 0;
        for (let i = 1; i <= inp; i++) {
            console.log('Chal gya');
            ans = ans + i
        }

        return ans
    }, [inp])

    return (
        <div>
            <h1>Sum : {out}</h1>
            <input onChange={handleChange} type='number' value={inp} />
            <button onClick={handleCount}>Counter - {count}</button>

        </div>
    )
}

export default Sum