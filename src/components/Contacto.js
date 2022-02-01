import React from 'react' 
import '../styles/itemsprueba.css';
import { Container, Row ,Col} from 'react-bootstrap';



export default function ContactoEmpresa(){






    return(
        <Container fluid >
            <Row>
                <Col lg={12} md={12} sm={12} className=" d-flex flex-column justify-content-center align-items-center align-content-center" >
                <h1 className='mt-3'> Reverse</h1>
                <h2>Tienda On-Line</h2>
                <h3 className='text-center'>Podes retirar los productos en nuestra oficina </h3>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.309389561704!2d-58.86963958477463!3d-34.44429338050108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c50d65a00cd%3A0x9c06c8efb2089c1a!2sConcord%20Pilar%20Aparts!5e0!3m2!1ses-419!2sar!4v1643634072016!5m2!1ses-419!2sar" className='Maps' loading="lazy" title="myFrame"></iframe>
                <h4 className='mt-3 text-center'>Con previo aviso a traves de nuestros medios de Contacto</h4>
                </Col>
                



            </Row>




        </Container>
    )
}