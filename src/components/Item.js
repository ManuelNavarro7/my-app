import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from "../context/carContext";

export default function Item(){

    const {id}=useParams()
    
    const {ItemCount} = useContext(shopContext)
     
       
    const sniker=([{id:'1',name:"Air Jordan Low",price:"$2000",img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000"},{ id:'2',name:"Air Jordan Low",price:"$2500",img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg"},{ id:'3',name:"Nike AF-1 stussi",price:"$50000",img: "https://www.coolzapas.es/wp-content/uploads/2021/01/CZ9084200_FOSS_1_720x.jpg"}])
     
    
     
      console.log(sniker)
      const resultado = sniker.find( Zapatillas => Zapatillas.id === `${id}` );
      

      const handleClick = ()=>{
        const event1 = new CustomEvent('clickDetalle',{detail:{data: {resultado}}})
          window.dispatchEvent(event1)
      }

      
      

return(
    <article className='d-flex flex-column justify-content-center align-items-center'>
    
    <div>{resultado.name}</div>
    <img src={resultado.img} width="300px" height="300px"></img>
    <div>{resultado.price}</div>
    <button onClick={handleClick}>Comprar</button>
    
    <ItemCount/>
    <NavLink to ={`/`}>Store</NavLink>
    <NavLink to ={`/Store/Cart`}>Cart</NavLink>
    </article>
)
}