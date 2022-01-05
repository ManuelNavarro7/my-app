import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from "../context/carContext";

export default function ItemDetail(){

    const {id}=useParams()
    
    const {ItemCount} = useContext(shopContext)
    
    const {carrito} = useContext(shopContext)
    
    const {sniker} = useContext(shopContext)  
    
    const {CantidadParaCompra} = useContext(shopContext)  
   
     
      
      const resultado = sniker.find( Zapatillas => Zapatillas.id === `${id}` );
      


return(
    <article key={resultado.id} id={resultado.id} className='d-flex flex-column justify-content-center align-items-center'>
    
    <div>{resultado.name}</div>
  
    <img src={resultado.img} style={{width:300, height:300}}></img>
    <div>{resultado.price}</div>
   
    <button onClick={carrito} id={resultado.id}  > agregar </button> 
    <input  ref={CantidadParaCompra} maxLength="1" type='text'/>
   
   
    <NavLink to ={`/`}>Store</NavLink>
    <NavLink to ={`/Store/Cart`}>Cart</NavLink>
    </article>
)
}