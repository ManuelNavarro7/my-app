import React,{useContext} from 'react' 
import { NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { shopContext } from "../context/carContext";
import '../styles/itemsprueba.css';
import { Container, Row ,Col} from 'react-bootstrap';
import ComponentCommon from './common';



export default function ProdcutoBusca(){


    const {texto} = useContext(shopContext)
    const {Data}=useContext(shopContext)
    
    const {carrito} = useContext(shopContext)

    const produc = Data.find(producto=>producto.name.toLowerCase() === texto)
  

   
    if(produc === undefined){
        return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <h1  >No coincide el producto</h1>
        <h2>Vuelva al store</h2>
        <NavLink to ={`/`}>
                                    <Button variant="flat" className='btn-Final  '>
                                    Store
                                    </Button></NavLink>
        </div>)
       } 
  
  
      
if(texto === produc.name.toLowerCase()){
  
    
  

    return(
        <Container fluid className="p-0">
    <Row key={produc.id} id={produc.id} className='d-flex flex-row justify-content-around align-items-center mt-5 background'>
        <Col lg={6} md={6} sm={12}>
   
    
   
    
    <img src={produc.img} alt={produc.id}className=' ImagenItem ps-4 '></img>
   
    
    
    </Col>
    <Col className='d-flex flex-column justify-content-center align-items-center' lg={6} md={6} sm={12}>

    
    <div className='mt3 ArticleName '>{produc.name}</div>
    <div className='mt3'>${produc.price}(impuestos incluidos)</div>
    <ComponentCommon.Decuento/>
   
    <Button className='btn-agregar mt-3' variant="flat" size="sm" onClick={carrito} id={produc.id} value={produc.price}  > Agregar </Button> 
  
   
    
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
}