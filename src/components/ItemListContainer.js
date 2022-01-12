import React,{useState, useEffect,useContext} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import { shopContext } from "../context/carContext";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'



const SaludoRecepcion={
    Saludo:(props)=>(<h1 className='Titulo1 bannerInicio d-flex justify-content-center'></h1>),
    
    
}




function ItemListContainer(props){
  const {Itemx} = useContext(shopContext)
  const { ItemFirebase} = useContext(shopContext)
 
    return(
        <div>
        <SaludoRecepcion.Saludo value={props.val} />
        <Itemx></Itemx>
        <ItemFirebase></ItemFirebase>
        
       </div>
    )
}



export default ItemListContainer;