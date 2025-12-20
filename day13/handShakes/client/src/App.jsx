import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Test from './components/Test.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
