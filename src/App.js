import React from 'react'
import Interface from './components/Interface'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Check from './components/Check'


const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Interface/>} ></Route>
    <Route path='/check' element={<Check/>}></Route>
   </Routes>
   </BrowserRouter>
   
    </div>
  )
}

export default App