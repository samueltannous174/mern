import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colors from './Components/Color'
import AddColor from './Components/AddColor'

function App() {
  const [array, setArray] = useState([])


  return (
    <div className="flex flex-col gap-2 p-5 border ">
            <Colors colors={array} />
            <AddColor setArray={setArray} />
    </div>
  )
}

export default App
