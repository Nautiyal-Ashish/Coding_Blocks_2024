import React from 'react'

function Events() {
    function handleDhaka() {
        console.log('Chala Ja Bhai');
    }
    function handleMukka(a, b) {
        console.log(a + b);
    }
    return (
        <div>
            {/* <button onClick={handleDhaka}>Click Me</button> */}
            {/* () => handleMukka() =  ()=> {
                return handleMukka()
            }*/}
            <button onClick={() => handleMukka(10, 20)}>Click Me</button>
        </div>
    )
}

export default Events