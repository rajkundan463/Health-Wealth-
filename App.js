import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
// eslint-disable-next-line
import { Button } from 'antd'
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>

      <Toaster position="top-right" reverseOrder={false} />

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
