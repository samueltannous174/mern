import { useState } from 'react'
import './App.css'
import TodoForm from "./Components/TodoForm.jsx";
import List from "./Components/List.jsx";

function App() {
  const [list, setList] = useState([])

  return (
    <>
        <TodoForm  setList={setList} />
        <List list={list} setList={setList} />
    </>
  )
}

export default App
