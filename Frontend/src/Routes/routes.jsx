import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>Register</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default routes
