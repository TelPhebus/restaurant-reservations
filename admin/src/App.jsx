import React, { useEffect, useState } from 'react'
import Login from './Components/Login'
import Sidebar from './Components/Sidebar'
import AddMenu from './pages/AddMenu'
import ListMenu from './pages/ListMenu'
import AdminTable from './pages/AdminTable'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "./App.css";

export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('token')
    return savedToken && savedToken !== 'null' ? savedToken : ''
  })

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  //here in the Container it shows us the Routes with their tokens
  return (
    <div className='Container'>
      <ToastContainer />
      {token.length > 0 ? (
        <>
        
          <Sidebar setToken={setToken} />
          <div className='main-content'>
            <Routes>
              <Route path='/add' element={<AddMenu token={token} />} />
              <Route path='/list' element={<ListMenu token={token} />} />
              <Route path='/table' element={<AdminTable token={token} />} />
            </Routes>
          </div>
        </>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  )
}

export default App