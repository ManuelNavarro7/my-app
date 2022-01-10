import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from '../context/carContext'

export default function Cart(){

    const {compraSniker} = useContext(shopContext)

    
    const {ItemCount} = useContext(shopContext)

    

    

    
    if(compraSniker==0){
      return <h2>Carrito Vacio</h2>
     }

    
if(compraSniker!=0){
return(
    <div>
      
    {
               compraSniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id}  id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} style= {{width:300, height:300}}></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
                 
                 
                 <ItemCount initialValue={valorActual.InputX.ED} stock={valorActual.stock} precio={valorActual.price} id={valorActual.id} />
                
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 <NavLink to ={`/`}>Store</NavLink>
                 </div>
                 )
                 
               })
              }
    </div>
)}
}


