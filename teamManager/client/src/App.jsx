import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Fix from './components/Fix.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import AllPlayers from './components/AllPlayers.jsx'
import Games from './components/Games.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'
import PublicRoute from './components/PublicRoute.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/fix" element={<Fix />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/all" element={<AllPlayers />} />
          <Route path="/game" element={<Games />} />
        </Route>
      
      </Routes> 
    </BrowserRouter>  
  )
}

export default App
