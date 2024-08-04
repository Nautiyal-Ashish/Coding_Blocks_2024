import React, { useState, useEffect } from 'react'

function App() {
  let [count, setCount] = useState(0)
  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000);
  //   // cleanup function -> interview functions
  //   return () => { clearInterval(id) }
  // }, [count])

  // juggad 
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //   }, 1000);
  // }
  // }, [count])


return (
  <div>
    {count}
  </div>
)
}

export default App



// ----------------
// import React, { useEffect, useState } from 'react'
// import Timer from './components/Timer';

// function App() {
//   // let [user,setUser] = useState(["sam"]);
//   // let [count,setCount] = useState(0);
//   // function handleInc(){
//   //   setCount(count+1)
//   // }
//   // api call
//   // useEffect(function(){
//   //   console.log("mai useeffect hu")
//   //   async function callApi(){
//   //     // let resp = await fetch('https://api.github.com/users/samarth0606')
//   //     let data = await resp.json();
//   //     setTimeout(function(){
//   //       setUser(data.login)
//   //     } , 5000)
//   //   }
//   //   callApi()
//   // } , [count])

//   return (
//     <div>
//       <Timer />

//       {/* {user}
//       <button onClick={handleInc}>Click</button> */}

//     </div>
//   )
// }

// export default App