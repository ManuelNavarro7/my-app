import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import { NavLink , useParams} from 'react-router-dom';
import { shopContext } from '../context/carContext'
import ComponentCommon from './common'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'
import jordanVioletas from '../imgs/jordanVioletas.jpeg'
import { Container, Col, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

export default function ItemFirebase(){

    
    
    
 
    const {value} = useContext(shopContext)
    const productos = value.productos[0]
   
 
   
  
    

return(
      
  <Container fluid className="p-0">
    
     <ComponentCommon.Banner/>
     <ComponentCommon.Title/>
     <div className='d-flex flex-column justify-content-center align-items-center'>{productos.length} Productos en tienda</div>
     <Row className='text-start' className='ms-5'> 
  {
      
            productos.map((val)=>{
               return (
               
                
              <Col key={val.id} id={val.id} lg={4} md={6} sm={6} >
                     <NavLink to ={`/Store/Detalle/${val.id}`} className='LinksObjetos'>
                     <img src={val.img} style={{width:240, height:180}} alt=""/>
                     <p className='ps-4'>{val.name}</p>
                     <p className='ps-4' >${val.price}</p>
                     </NavLink>
              </Col>
               
              
               )
               
             })
            }
           </Row>
          </Container>
  
    )



  }
