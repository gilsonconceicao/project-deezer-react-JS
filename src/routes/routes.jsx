import React from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/navBar/NavBar';
import { Artists } from '../pages/artists/Artists';
import AboutDeezer from '../pages/about/AboutDeezer';
import { CreatedApplication } from '../pages/apiDeezer/CreatedApplication';

export const RoutesPages = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Artists/>}/>
        <Route path='/aboutDeezer' element={<AboutDeezer/>}/>
        <Route path='/createdApplication' element={<CreatedApplication/>}/>
      </Routes>  
    </BrowserRouter>
  )
}
