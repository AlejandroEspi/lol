import React from 'react'
import { Route,Routes,BrowserRouter,Navigate } from 'react-router-dom'
import {Inicio} from "../Components/Inicio";
import { Portafolio } from '../Components/Portafolio';
import { Servicios } from '../Components/Servicios';
import { Curriculum } from '../Components/Curriculum';
import { Contacto } from '../Components/Contacto';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Proyecto } from '../Components/Proyecto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*Header y navegacion */}
         <Header></Header>

        {/*Contenido Central*/}
          <section className='content'>
           <Routes>
             <Route path="/" element={<Navigate to="/Inicio" />}></Route>
             <Route path="/inicio" element={<Inicio/>}></Route>
             <Route path="/Portafolio" element={<Portafolio/>}></Route>
             <Route path="/Servicio" element={<Servicios/>}></Route>
             <Route path="/Curriculum" element={<Curriculum/>}></Route>
             <Route path="/Contacto" element={<Contacto/>}></Route>
             <Route path="/proyecto/:id" element={<Proyecto/>}></Route>
             <Route path="*" element={
              <div className='page'>
                <h1 className='heading'>Error 404</h1>
              </div>}></Route>
          </Routes>
        </section>
        {/* footer o pie de pagina */}
           
           <Footer></Footer>
    </BrowserRouter>
  )
}
