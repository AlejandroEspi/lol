import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'> 
   
       
        
             <div className='logo'>
                 <span>A</span>
                 <h3>Alejandro Espinosa Presentacion</h3>
             </div>
          <nav >
            <ul>
                <li>
                 <NavLink to="/Inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                 <NavLink to="/Portafolio" className={({isActive}) => isActive ? "active" : ""} >Portafolio</NavLink>
                </li>
                <li>
                 <NavLink to="/Curriculum" className={({isActive}) => isActive ? "active" : ""} >Curriculum</NavLink>
                </li>
                <li>
                 <NavLink to="/Contacto" className={({isActive}) => isActive ? "active" : ""} >Contacto</NavLink>
                </li>
                <li>
                 <NavLink to="/Servicio" className={({isActive}) => isActive ? "active" : ""} >Servicio</NavLink>
                </li>
            </ul>
        </nav>
    
    </header>
  )
}
