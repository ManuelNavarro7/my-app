
import React,{useContext} from 'react' 
import Navbar  from 'react-bootstrap/Navbar'
import Container  from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { shopContext } from "../context/carContext";
import Button from 'react-bootstrap/Button'
import { FormControl, InputGroup,Form } from 'react-bootstrap'



const CartWidgets={

    ImagenCarrito:()=>(<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>)
    
}




function NavBarComponent(props){


  
  
  

  const {compraSniker} = useContext(shopContext)

  const {handleSubmitinput} = useContext(shopContext)
  const {texto} = useContext(shopContext)
  const {handleInputChange1} = useContext(shopContext)
  
  
    return(
      <Navbar bg="dark" expand="lg sm">
      <Container>
      
      <NavLink to ={'/'} className='Links'> <div className=" Reverse">
      Reverse Shop
    </div></NavLink>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='Toggle ' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            
            
          </Nav>
          <Form onSubmit={handleSubmitinput} className='d-flex flex-row justify-content-center align-items-center mt-2 mb-2'>
          <InputGroup  className="InputBuscador" type='text'
            name='buscar'
            placeholder='nombre del producto'
            value={texto}
            onChange={handleInputChange1}>
             
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          
           
            <NavLink to ={"/Store/ProductoBuscado"} className='ps-3'> <Button type='Submit' variant="outline-light" >Buscar</Button></NavLink>
          </Form>
           
          
         
          
          <NavLink to ={"/Store/Contacto"} className='Links ms-2'>Contacto</NavLink>
          <NavLink to ={`/Store/Cart`} className='ps-3'><CartWidgets.ImagenCarrito > </CartWidgets.ImagenCarrito></NavLink>
          <NavLink to ={`/Store/Cart`} className='Links ps-3'>{compraSniker.length}</NavLink>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        
    )
}


export default NavBarComponent;
