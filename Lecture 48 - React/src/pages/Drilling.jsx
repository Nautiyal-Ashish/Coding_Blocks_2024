// import React from 'react'

// function A() {
//     let drill = 100;
//     return (
//         <><div>A</div> <B p={drill} /></>
//     )
// }

// function B({ p }) {
//     return (
//         <><div>B</div> <C p={p} /></>
//     )
// }


// function C({ p }) {
//     return (
//         <><div>C</div> <D p={p} /></>
//     )
// }

// function D({ p }) {
//     // console.log(drill); //error because can not access drill directly from A
//     return (
//         <><div>D : {p}</div></>
//     )
// }

// export default A

// ------------------------------------------------
// Prop Drilling using useContext 
import React, { createContext, useContext } from 'react'

// create context
let DataContext = createContext(0)

function A() {
    let drill = 100;
    return (
        <>
            {/* wrapping for context -> syntax */}
            {/* line number 40 se drill aya  */}
            <DataContext.Provider value={drill}>
                <div>A</div> <B />
            </DataContext.Provider>
        </>
    )
}

function B() {
    return (<><div>B</div> <C /></>)
}


function C() {
    return (<><div>C</div> <D /></>)
}

function D() {
    let data = useContext(DataContext) // reference liya 
    return (<> <div>D : {data}</div></>)
}

export default A