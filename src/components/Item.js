import React,{useState, useEffect} from 'react' 
import { NavLink , useParams} from 'react-router-dom'


export default function Item(){

    const {id}=useParams()
    
    
     
       
    const sniker=([{id:'1',name:"Air Jordan Low",price:"$2000",img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000"},{ id:'2',name:"Air Jordan Low",price:"$2500",img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg"},{ id:'3',name:"Air Jordan j balvin",price:"$50000",img: "https://www.zapatillasysneakers.com/sites/default/files/static/images/news/zapatillas_air_jordan_1_j._balvin_.png"}])
     
    
     
      console.log(sniker)
      const resultado = sniker.find( Zapatillas => Zapatillas.id === `${id}` );
      console.log(resultado)
      

return(
    <article>
    
    <div>{resultado.name}</div>
    <img src={resultado.img} width="300px" height="300px"></img>
    <div>{resultado.price}</div>
    <NavLink to ={`/`}>Store</NavLink>
    </article>
)
}