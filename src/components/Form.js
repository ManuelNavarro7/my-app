import React,{useState, useEffect,useContext,useRef} from 'react' 
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { shopContext } from '../context/carContext'
import TicketFinal from './TicketFinal';

export default function  FormFinal () {

    const {handleSubmit} = useContext(shopContext)
    const {handleClick} = useContext(shopContext)
    const {FinalPrice} = useContext(shopContext)

    const {Total}= useContext(shopContext)

    TicketFinal()
    //console.log(TicketFinal)
    //const  TicketF = TicketFinal()

    return(

        <Container>
            <div>${Total}</div>
        <Form onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Nombre</Form.Label>
           <Form.Control type="text" placeholder="Ingresa el nombre" />
       </Form.Group>

       <Form.Group className="mb-3">
           <div>{FinalPrice}</div>
       </Form.Group>
       <Button variant="primary" type="submit">
           Ingresar
       </Button>
      
       </Form>

       <div>{TicketFinal()}</div>
       </Container>)
   



  



}