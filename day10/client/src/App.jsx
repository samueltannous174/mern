import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Products from './components/Products.jsx'
import Error from './components/Error.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error/:id" element={<Error />} />
        <Route path="/" element={<Products />} />

      </Routes> 
    </BrowserRouter>
  )
}

export default App
