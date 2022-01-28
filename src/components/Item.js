
import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { shopContext } from "../context/carContext";
import '../styles/itemsprueba.css';
import { Container, Row ,Col} from 'react-bootstrap';
import ComponentCommon from './common';
export default function ItemDetail(){

    
    const {id}=useParams()
    
    const {carrito} = useContext(shopContext)
    
    const {value} = useContext(shopContext)
    
    const productos = value.productos[0]
    
   
    const resultado = productos.find(el => el.id === id)


   
   


return(
<Container fluid className="p-0">
    <Row key={resultado.id} id={resultado.id} className='d-flex flex-row justify-content-around align-items-center mt-5 background'>
        <Col lg={6} md={6} sm={12}>
   
    
   
    
    <img src={resultado.img} className=' ImagenItem ps-4 '></img>
   
    
    
    </Col>
    <Col className='d-flex flex-column justify-content-center align-items-center' lg={6} md={6} sm={12}>

    
    <div className='mt3 ArticleName '>{resultado.name}</div>
    <div className='mt3'>${resultado.price}(impuestos incluidos)</div>
    <ComponentCommon.Decuento/>
   
    <Button className='btn-agregar mt-3' variant="flat" size="sm" onClick={carrito} id={resultado.id} value={resultado.price}  > Agregar </Button> 
  
   
    
   <article className='d-flex flex-column justify-content-center align-items-center mt-5'>
    <section>
    <NavLink to ={`/`}><Button className='btn btn-outline-dark ' variant="flat" size="sm" > Store</Button></NavLink>
    <NavLink to ={`/Store/Cart`}><Button className='btn btn-outline-dark  ms-5' variant="flat" size="sm" > Cart </Button> </NavLink>
    </section>
    <section>
    <ComponentCommon.Entrega/>
    </section>
    </article> 
    </Col>
 
 
 </Row>
    </Container>
    
)
}