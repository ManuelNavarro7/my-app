
import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from "../context/carContext";

export default function ItemDetail(){

    
    const {id}=useParams()
    
    const {carrito} = useContext(shopContext)
    
    const {value} = useContext(shopContext)
    
    const productos = value.productos[0]
    
   
    const resultado = productos.find(el => el.id === id)


   
   


return(
    <article key={resultado.id} id={resultado.id} className='d-flex flex-column justify-content-center align-items-center'>
    
   
  
    <img src={resultado.img} style={{width:300, height:300}}></img>
    <div>{resultado.price}</div>
    <div>{resultado.name}</div>
    <button onClick={carrito} id={resultado.id} value={resultado.price}  > agregar </button> 
   
    
    <NavLink to ={`/`}>Store</NavLink>
    <NavLink to ={`/Store/Cart`}>Cart</NavLink>
    </article>
    
)
}