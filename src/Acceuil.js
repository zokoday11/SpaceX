import React from 'react'
import './App.css';
import {Routes,Route} from "react-router-dom";
import Dernier from './composants/Dernier';
import Prochain from './composants/Prochain';
import Apropos from './composants/Apropos';
import Recherche from './composants/Recherche';
import  './index'
import App from './App';
import Nav from './composants/Nav';



function Acceuil() {
  return (
<div>
    <Nav/>
<Routes>
      <Route path='/' element={<App/>}/> 
        <Route path='/Dernier' element={<Dernier/>}/> 
        <Route path='/Prochain' element={<Prochain/>}/> 
        <Route path='/Recherche' element={<Recherche/>}/> 
        <Route path='/Apropos' element={<Apropos/>}/> 



      </Routes>

</div>

  )
}

export default Acceuil