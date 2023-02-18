import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/Home/HomePage'
import Pokedex from '../Pages/Pokedex'
import Detalhes from '../Pages/Detalhes'

const Router = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
        <Route path="/detalhes/:id" element={<Detalhes/>}/>
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default Router