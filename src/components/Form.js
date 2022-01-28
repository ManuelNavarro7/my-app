import React,{useState, useEffect,useContext,useRef} from 'react' 
import { Container, Row ,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { shopContext } from '../context/carContext'
import TicketFinal from './TicketFinal';


export default function  FormFinal () {

    const {handleSubmit} = useContext(shopContext)
    
    
    const {Total}= useContext(shopContext)
    const {compraSniker}= useContext(shopContext)
    

    TicketFinal()
    //console.log(TicketFinal)
    //const  TicketF = TicketFinal()

    return(

        <Container fluid className="p-0">
            <Row>
                <Col  lg={6} md={6} sm={12} className=' mt-2 d-flex flex-column justify-content-center align-items-center'>
             <div className='Bold1 mb-4'>Productos Seleccionados</div>   
          {  compraSniker.map((valorActual)=>{
                 return ( 
                <div key={valorActual.id} className=' d-flex flex-column justify-content-center align-items-center mb-4'>
                        
                 <img src={valorActual.img} className='ImagenFormFinal ps-4'></img>   
                 <div>{valorActual.name}</div>
                 <div>Precio: ${valorActual.price}</div>
                 <div>Talle:{valorActual.talle}</div>
                 <div>Cantidad Seleccionada: {valorActual.cantidad}</div>
                 </div>      
                            )})}

            <div> Precio Total de su compra :${Total}</div>
            </Col  >
            <Col lg={6} md={6} sm={12} className='mt-4 d-flex flex-column justify-content-center align-items-center'>
        <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3 mt-4 Bold d-flex flex-column justify-content-center align-items-center" controlId="nombre">
           <Form.Label>Nombre</Form.Label>
           <Form.Control className='FormProps' type="text" placeholder="Ingresa el nombre" />
       </Form.Group>
       <Form.Group className="mb-3 Bold d-flex flex-column justify-content-center align-items-center" controlId="Dni">
            <Form.Label>DNI</Form.Label>
            <Form.Control className='FormProps' type="number" placeholder="Ingresa el DNI" />
        </Form.Group>
        <Form.Group className="mb-3 Bold d-flex flex-column justify-content-center align-items-center" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className='FormProps' type="email" placeholder="Ingresa el email" />
        </Form.Group>

      <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
       <Button variant="primary" type="submit" >
           Finalizar Compra
       </Button>
       </div>
       </Form>
       </Col>
       <Row>
      
      
      

       <div>{TicketFinal()}</div>
       </Row>

</Row>
       </Container>)
   



  



}