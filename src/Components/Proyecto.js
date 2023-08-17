import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../Date/trabajos';

export const Proyecto = () => {
   
   const [proyecto,setproyecto]=useState({});
    const params = useParams();

  useEffect(()=>{
    let proyecto = trabajos.filter(trabajos => trabajos.id === params.id);
    setproyecto(proyecto[0]);
    

  },[])
  
  return (
    
       <div className='page page-work'>
         <div className='mask'>
            <img src={"/imagenes/"+proyecto.id+".png"}/>
            </div>
        <h1 className='heading'>{proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={"https://"+proyecto.url} target='_blank'>Ir a proyecto</a>    
        
       </div>
   
  )
}
