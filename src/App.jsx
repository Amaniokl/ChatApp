import React, { lazy } from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))

let user = false;

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectRoute user={user}>
            <Home/>
          </ProtectRoute>
        }></Route>
        <Route path="/chat/:id" element={<Chat />}></Route>
        <Route path="/group" element={<Group />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
