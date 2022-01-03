import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from '../context/carContext'

export default function Cart(){

    const {compraSniker} = useContext(shopContext)
    console.log({compraSniker})
    


    

  
    
  const handleClick1 = (e)=>{
    const event2 = new CustomEvent('clickResta',{detail:{data: {e}}}) 
  
      window.dispatchEvent(event2)
  }
    

return(
    <div>
      
    {
               compraSniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id}  id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} width="300px" height="300px"></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
                 <button onClick={handleClick1}>Borrar</button>
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 <NavLink to ={`/`}>Store</NavLink>
                 </div>
                 )
                 
               })
              }
    </div>
)
}


