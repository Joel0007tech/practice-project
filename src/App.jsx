import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';


export default function App(){
  return (
    <div className='bg-yellow-500 h-screen w-screen'>
      <div>
      <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}  />
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/works" element={<Works/>}/>   
     </Routes>
  </BrowserRouter>
      </div>
      
    </div>
 
  )}
