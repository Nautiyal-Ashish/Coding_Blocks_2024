import React, { useState } from 'react'

// function Student({ name, age }) {
//     function handleClick() {
//         console.log(name);
//         name = "Anonymous";
//         console.log(name);
//     }

//     return (
//         <div>
//             <h1>Name : {name}</h1>
//             <h1>Age : {age}</h1>
//             <button onCanPlay={handleClick}>LogOut</button>
//         </div>
//     )
// }


function Student({ name, age }) {
    let [naam, setNaam] = useState(name)
    function handleClick() {
        setNaam("Anonymous")
    }
    return (
        <div>
            <h1>Name : {naam}</h1>
            <h1>Age : {age}</h1>
            {/* <button onClick={handleClick}>LogOut</button> */}
            <button onClick={() => handleClick()}>LogOut</button>
        </div>
    )
}



export default Student