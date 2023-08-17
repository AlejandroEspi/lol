import React from 'react'
import { trabajos } from '../Date/trabajos'
import { Link } from 'react-router-dom'

export const ListadoTrabajo = ({limite}) => {
  return (
  
      <section className='works'>
       {
        trabajos.slice(0,limite).map(trabajo=>{
         return(
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
            <img src={process.env.PUBLIC_URL + '/imagenes/' + trabajo.id + '.png'} alt='imagen de puntos o respuesta' />
            </div>
            <span>{trabajo.categoria}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
           
          </article>
         )   
        })
      }
     </section>


   
  )
}