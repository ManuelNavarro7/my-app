import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import ComponentCommon from './common'
import { shopContext } from '../context/carContext'
import FormFinal from './Form'
import TicketFinal from './TicketFinal'
import Select from 'react-select'
import 'boxicons'
import Button from 'react-bootstrap/Button'



export default function Cart(){

    const {compraSniker} = useContext(shopContext)
    const { Total} = useContext(shopContext)
    const {  removeProductos } = useContext(shopContext)
    const {  reduce } = useContext(shopContext)
    const {  increase } = useContext(shopContext)
    const {  FormFinal } = useContext(shopContext)
   
    if(compraSniker==0){
      return <h2>Carrito Vacio</h2>
     }

     

    
if(compraSniker!=0){

  

  
  //TicketFinal()
  //const  TicketF = TicketFinal()
return(
    <div>
      
    {
               compraSniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id}  id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} style= {{width:300, height:300}}></img>
                 <p>{valorActual.name}</p>
                 <p>Precio {valorActual.price}</p>
                 <box-icon onClick={() => increase(valorActual.id)} name="up-arrow-circle"type="solid"/>
                 <p className='cantidad'>{valorActual.cantidad}</p>
                 <box-icon onClick={() => reduce(valorActual.id)} name="down-arrow-circle" type="solid"/>
                 <div onClick={()=>removeProductos(valorActual.id)}>
                 <box-icon name='trash' type='solid' ></box-icon>
                 </div>
                 
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 <NavLink to ={`/`}>Store</NavLink>
                 </div>
                 )
                 
               })
              }
              
              <div className='carrito_footer'>
              <h3>Total ${Total}</h3>
              <NavLink to ={`/Store/CheckOut`}> <Button variant="primary" onClick={FormFinal}>Primary</Button></NavLink>
             
              </div>
             
              
              
              
              
    </div>

   
)}
}


