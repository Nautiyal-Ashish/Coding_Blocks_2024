import React, { Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
// import Admin from './pages/Admin'
// import Dashboard from './pages/Dashboard'


const Admin = React.lazy(() => import('./pages/Admin'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))


function App() {
  {/* Use Navigate -> jab extra kaam karna hai saath mai tab use karo  */ }
  let navigate = useNavigate()
  function handleBtn1() {
    navigate('/admin')
  }
  function handleBtn2() {
    navigate('/dashboard')
  }
  return (
    <>
      {/* by these method realoading will happen not a correct way */}
      <button onClick={handleBtn1}>Admin</button>
      <button onClick={handleBtn2}>Dashboard</button>
      {/* ------------------------------------------------------------------- */}

      {/* by these method realoading will happen not a correct way */}
      {/* <li><a href='/admin'>Admin</a></li> */}
      {/* <li><a href='/dashboard'>Dashboard</a></li> */}
      {/* ------------------------------------------------------------------- */}


      {/* Bahar nhi ho skta Link BrowserRouter ke //warna error dega */}
      {/* <Link to={<Admin />} />  */}
      {/* ------------------------------------------------------------------- */}

      {/* Correct way is to use <Link> tag */}
      {/* <Link to='/admin'>Admin</Link>
      <br />
      <Link to='/dashboard'>Dashboard</Link> */}


      {/* yaha se utha ke main main laga dia  */}
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path='/admin' element={<Admin />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}


        {/* Using Lazy use this format  */}
        <Route path='/admin' element={
          <Suspense fallback={"Loading admin ..."}>
            <Admin />
          </Suspense>} />
        <Route path='/dashboard' element={
          <Suspense fallback={"Loading dashbaord ..."}>
            <Dashboard />
          </Suspense>} />
      </Routes>
      {/* <BrowserRouter> */}
    </>
  )
}

export default App