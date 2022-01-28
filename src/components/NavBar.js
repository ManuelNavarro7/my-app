
import React,{useState, useEffect,useContext} from 'react' 
import Navbar  from 'react-bootstrap/Navbar'
import Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ComponentCommon from './common'
import { shopContext } from "../context/carContext";

/*
const Components={
    Circulo1:(props)=>(<button type="button" class="btn btn-primary">Primary</button>),
    Circulo2:(props)=>(<h1>{props.id}</h1>),
    Circulo3:(props)=>(<h1>{props.id}</h1>),
}
*/

const CartWidgets={

    ImagenCarrito:()=>(<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>)
    //ImagenCarrito:(props)=>(<img src={props.src} className='ImgCarrito'/>)
}




function NavBarComponent(props){


  
  const {isDarkMode} = useContext(shopContext)
  

  const {compraSniker} = useContext(shopContext)

  
    return(
      <Navbar bg="dark" expand="lg">
      <Container>
      <NavLink to ={'/'} className='Links'>Home</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            
            
          </Nav>
          <Nav.Link className='Links'>Contacto</Nav.Link>
          <NavLink to ={`/Store/Cart`} className='ps-3'><CartWidgets.ImagenCarrito > </CartWidgets.ImagenCarrito></NavLink>
          <NavLink to ={`/Store/Cart`} className='Links ps-3'>{compraSniker.length}</NavLink>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        
    )
}


export default NavBarComponent;
