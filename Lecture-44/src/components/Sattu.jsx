import React from 'react'

function Sattu() {

    let a = 10;
    let b = "sam";
    //cannot read by react -> truthy and falsy value
    let c = false; //can be read by toString() or JSON.stringify()
    let d = true; //can be read by toString() or JSON.stringify()
    let e = null; //can only read by JSON.stringify()
    let f = undefined; //cannot read by react and by JSON.stringify 

    let arr = [1, 2, 3];
    let obj = { a: 1 } // cannot show directly in react use . notation
    return (
        <div>
            <h1>Array - {arr}</h1>
            <h1>Array - {arr[0]}</h1>
            <h1>Array - {arr['0']}</h1>
            <h1>Object - {obj.a}</h1>

            {/* <h1>a- {a}</h1> */}
            {/* <h1>b- {b}</h1> */}
            {/* <h1>c- {JSON.stringify(c)}</h1> */}
            {/* <h1>d- {JSON.stringify(d)}</h1> */}
            {/* <h1>e- {JSON.stringify(e)}</h1> */}
            {/* <h1>f- {JSON.stringify(f)}</h1> */}
        </div>
    )
}

export default Sattu