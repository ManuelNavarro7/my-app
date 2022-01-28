import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import ComponentCommon from './common'
import { shopContext } from '../context/carContext'
import FormFinal from './Form'
import TicketFinal from './TicketFinal'
import Select from 'react-select'
import 'boxicons'
import Button from 'react-bootstrap/Button'
import { Container, Row ,Col} from 'react-bootstrap';



export default function Cart(){

    const {compraSniker} = useContext(shopContext)
    const { Total} = useContext(shopContext)
    const {  removeProductos } = useContext(shopContext)
    const {  reduce } = useContext(shopContext)
    const {  increase } = useContext(shopContext)
    const {  reduceTalle } = useContext(shopContext)
    const {  increaseTalle } = useContext(shopContext)
    const {  FormFinal } = useContext(shopContext)
   
    if(compraSniker==0){
      return <h2 className='d-flex flex-column justify-content-center align-items-center mt-5' >Carrito Vacio</h2>
     }

     

    
if(compraSniker!=0){

  console.log(compraSniker)

  
  //TicketFinal()
  //const  TicketF = TicketFinal()
return(
  <Container fluid className="p-0">
     <Row> 
    {
               compraSniker.map((valorActual)=>{
                 return (
                   <Row  key={valorActual.id} className='mt-4'>
                 <Col lg={6} md={6} sm={12} id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} className='ImagenItem ps-4'></img>
                 </Col>
                 <Col className='d-flex flex-column justify-content-center align-items-center' lg={6} md={6} sm={12}>
                 <p className='ArticleName'>{valorActual.name}</p>
                 <p>Precio $ {valorActual.price}</p>
                 <Row>
                   <Col className='d-flex flex-column justify-content-center align-items-center'>
                 <box-icon onClick={() => increase(valorActual.id)} name="up-arrow-circle"type="solid"/>
                 <p className='cantidad mt-3 d-flex flex-row justify-content-center align-items-center'>Cantidad :{valorActual.cantidad}</p>
                 <box-icon onClick={() => reduce(valorActual.id)} name="down-arrow-circle" type="solid"/>
                 </Col>
                 <Col className='d-flex flex-column justify-content-center align-items-center'>
                 <box-icon onClick={() => increaseTalle(valorActual.id)} name="up-arrow-circle"type="solid"/>
                 <p className='Talle mt-3   d-flex flex-row justify-content-center align-items-center'> Talle{valorActual.talle}</p>
                 <box-icon onClick={() => reduceTalle(valorActual.id)} name="down-arrow-circle" type="solid"/>
                 </Col>
                 </Row>
                 <div className='mt-4' onClick={()=>removeProductos(valorActual.id)}>
                 <box-icon name='trash' type='solid' ></box-icon>
                 </div>
                 <NavLink  to ={`/Store/Detalle/${valorActual.id}`}> <Button className='btn-agregar mt-3' variant="flat" size="sm" > Detalle</Button> </NavLink>
                 <NavLink to ={`/`}><Button className='btn btn-outline-dark mt-3 Btn-Store' variant="flat" size="sm" > Store</Button></NavLink>
                 
                
                 
                 </Col>
                 </Row>
                 )
                 
               })
              }
              
              <div className='carrito_footer d-flex flex-column justify-content-center align-items-center mt-5'>
              <h3>Total ${Total}</h3>
              <NavLink to ={`/Store/CheckOut`}> <Button variant="outline-success" onClick={FormFinal}>Finalizar Compra</Button></NavLink>
             
              </div>
             
              
              
              
        </Row>      
    </Container>

   
)}
}


