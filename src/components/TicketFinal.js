import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { shopContext } from '../context/carContext'
import '../styles/itemsprueba.css';
import { Container, Row ,Col} from 'react-bootstrap';



export default function TicketFinal(){


    const {FinalCheckOut} = useContext(shopContext)

    

    return(
        <Container fluid className="p-0 mt-5">
            {
                      FinalCheckOut.map((valorActual)=>{
                        return (
                            <Row key={valorActual.id} id={valorActual.id}>  
                                <Col  lg={12} md={12} sm={12} className='TicketFinal d-flex flex-column justify-content-center align-items-center align-content-center'>
                                   
                                   
                                    <div className='mb-2' >{valorActual.nombre}</div>
                                    <div className='mb-2'>El ID de seguimiento de la compra es :</div>
                                    <div className='mb-3'>{valorActual.id}</div>
                                </Col>
                                    <Col lg={12} md={12} sm={12} className=' d-flex flex-column justify-content-center align-items-center align-content-center'>
                                    <NavLink to ={`/`}>
                                    <Button variant="flat" className='btn-Final  '>
                                    Store
                                    </Button></NavLink>
                                </Col>
                        
                        
                        </Row>
                        )
                        
                      })

            }
       </Container>
    )



}