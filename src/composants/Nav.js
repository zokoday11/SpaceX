import React from 'react'
import { Link } from 'react-router-dom'
import  './Acceuil.css'


export default function Nav() {
  return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <a id='navbar' className="navbar" href="#">
    <Link to="/">
    SPACE X </Link> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> 
          <Link to="/Dernier">
          3 DERNIERS LANCEMENTS
          </Link> 
          </a>
        </li>
        

        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <Link to="/Prochain">
          PROCHAIN LANCEMENT 
          </Link>  </a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <Link to="/Recherche">
          CHERCHER PAR NOM DE MISSION         </Link>  </a>
        </li>
        
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <Link to="/Apropos">
          A PROPOS       </Link> </a>
        </li>

        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
