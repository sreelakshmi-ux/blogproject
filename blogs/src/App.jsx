import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Blogpage from './components/Blogpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element= {<Homepage/>}/>
          <Route path='/Add' element= {<Blogpage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
