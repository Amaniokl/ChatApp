import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import Notfound from './pages/Notfound'


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Group = lazy(() => import('./pages/Group'))

let user = true;

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Suspense fallback={<Layout/>}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chat/:id" element={<Chat />}></Route>
          <Route path="/group" element={<Group />}></Route>
        </Route>

        <Route path="/login" element={
          <ProtectRoute user={user} redirect='/'>
            <Login />
          </ProtectRoute>}>
        </Route>

      <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      </Suspense>
    </BrowserRouter>

  )
}

export default App
