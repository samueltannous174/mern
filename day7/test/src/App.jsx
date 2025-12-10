import './App.css'
import {Routes, Route } from 'react-router-dom'
import Main from "./Components/Main.jsx";
import Home from "./Components/Home.jsx";
import Colors from "./Components/colors.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/:word/:color?" element={<Colors />} />
        </Routes>
    </>
  )
}

export default App
