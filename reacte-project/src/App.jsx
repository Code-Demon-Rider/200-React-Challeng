import { Routes, Route } from 'react-router-dom';
import { useState } from 'react' 

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path="*" element={<h1>404 Page is not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
