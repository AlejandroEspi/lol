import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajo } from './ListadoTrabajo'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola,<strong> soy Alejandro Jose Espinosa Valdez </strong> soy un Desarrollador web en Colombia
        y ofrezco mis servicios de <strong>programación y desarrollo </strong> en tipo de proyectos web.
      </h1>
       
       <h2 className='title'>
          Ayudo a Crear a tu sitio o aplicación web,
          tener más visibilidad y relevancia de internet.. <Link to="/contacto">Contacto comingo</Link>
       </h2>

       <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunas de mis proyectos de desarrollo web</p>

        <div>

        </div>
        <ListadoTrabajo limite="2"/>
       </section>
    
    </div>
  )
}
