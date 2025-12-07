import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Main from './Components/Main'
import Sub from './Components/Sub'
import Adv from './Components/Adv'
import './App.css'
import Nav from "./Components/Nav.jsx";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-[#E8EBEE] w-[98%] flex  mt-5 mx-auto flex flex-col">
        <Header className="w-[100%] h-30 bg-[#2FED04] " />

        <div className="flex mt-5">

            <Nav className="w-[20%] h-100 "/>

            <Main className="w-[80%] h-[600px] bg-red-500 flex gap-8 mg-auto justify-center p-5 box-border flex-col " />

        </div>
        <Adv/>
    </div>
  )
}

export default App
