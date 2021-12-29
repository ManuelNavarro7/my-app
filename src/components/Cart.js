import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import ItemCount from './ItemCount'
import { shopContext } from '../context/carContext'

export default function Cart(){

    const {compraSniker} = useContext(shopContext)
    console.log({compraSniker})
    const {cantidad} = useContext(shopContext)

    const cant1= {cantidad}

    console.log(cant1)

return(
    <div>
      <p>{cantidad}</p>
    {
               compraSniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id} id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} width="300px" height="300px"></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
                 
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 <NavLink to ={`/`}>Store</NavLink>
                 </div>
                 )
                 
               })
              }
    </div>
)
}