import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Team from './components/Team';
import Contact  from './components/Contact';


export default function App(){
  return (
    <div className='bg-[#38383]'>
      <div>
      <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home/>}  />
          <Route path="/services" element={<Services/>}/>
          <Route path="/works" element={<Works/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/team" element={<Team/>}/> 
          <Route path="/contact" element={<Contact/>}/>
     </Routes>
  </BrowserRouter>
      </div>
      
    </div>
 
  )}
