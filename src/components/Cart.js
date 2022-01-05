import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from '../context/carContext'

export default function Cart(){

    const {compraSniker} = useContext(shopContext)

    
    const {ItemCount} = useContext(shopContext)

    const {CantInput} = useContext(shopContext)
 
    

return(
    <div>
      
    {
               compraSniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id}  id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} style= {{width:300, height:300}}></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
                 <div>{CantInput}</div>
                 <ItemCount/>
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 <NavLink to ={`/`}>Store</NavLink>
                 </div>
                 )
                 
               })
              }
    </div>
)
}


