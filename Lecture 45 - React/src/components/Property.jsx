import React from 'react'

// function Property(props) {
function Property({ city, owner }) {
    // console.log(props);
    // console.log(props.city);
    // console.log(props.owner);
    console.log(city);
    console.log(owner);
    return (
        <div>
            {/* always be in single parent -> for faster reconcilation -> comparison of the virtual dom and the changes made */}
            <h1>Location : {city}</h1>
            <h1>Owner : {owner}</h1>
        </div>
    )
}

export default Property

// props -> properties/arguments 