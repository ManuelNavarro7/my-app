import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import { NavLink , useParams} from 'react-router-dom';
import { shopContext } from '../context/carContext'
import ComponentCommon from './common'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'
import jordanVioletas from '../imgs/jordanVioletas.jpeg'

export default function ItemFirebase(){

    
    
    
   
    const {value} = useContext(shopContext)
    const productos = value.productos[0]
   
 
   
  
    

return(
      
  <div>
    
     <ComponentCommon.Saludo/>
     
  {
      
            productos.map((val)=>{
               return (
               <div key={val.id} id={val.id} className='d-flex flex-column justify-content-center align-items-center'>
               <img src={val.img} style={{width:300, height:300}} alt=""/>
               <p>{val.name}</p>
               <p>{val.price}</p>
               <NavLink to ={`/Store/Detalle/${val.id}`}>Detalle</NavLink>
              
    
               </div>
               )
               
             })
            }
  </div>
  
    )



  }
