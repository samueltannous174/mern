import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './components/CreateForm'
import Authors from './components/Authors'
import EditForm from './components/EditForm'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/authors/new" element={<CreateForm />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/edit/:id" element={<EditForm />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
