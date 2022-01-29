import React,{useState, useEffect,useContext,useRef} from 'react' 
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { shopContext } from '../context/carContext'
import TicketFinal from './TicketFinal';
import { FaFacebook, FaTwitter,FaInstagram } from "react-icons/fa"



export default function  Footer () {


return(
    


  <footer className="text-white text-center text-lg-start bg-dark mt-5">
    
    <div className="container p-4">
     
      <div className="row mt-4">
       
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 text-center">REVERSE company</h5>

          <p>
            Somos una compania dedicada al importacion de calzado de mas alta calidad.
          </p>

          <p>
           Encontra las mejores marcas en un solo lugar y al mejor precio
          </p>

          <div className="mt-4 d-flex flex-row justify-content-center align-items-center align-content-center">
            
          

           
            <a type="button" className="btn btn-floating btn-light btn-lg ms-4" href='https://www.instagram.com/manupavonnavarro'><FaInstagram/></a>
           
            <a type="button" className="btn btn-floating btn-light btn-lg ms-4" href='https://twitter.com/ManuelN93748039'><FaTwitter/></a>
            
            
           
          </div>
        </div>
       

       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
          <h5 className="text-uppercase mb-4 pb-1 text-center">Contacto</h5>

         

          <ul className="fa-ul d-flex flex-column justify-content-start align-items-start align-content-start" >
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Avenida Siempreviva 742 </span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">manuel.mnavarro@hotmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 text-center">Horarios de Entregas</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Lun - Vier:</td>
                <td>8am - 15pm</td>
              </tr>
              <tr>
                <td>Vier - SaB:</td>
                <td>8am - 13pm</td>
              </tr>
              <tr>
                <td>Domingo:</td>
                <td>Not deliver</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
     
    </div>
    

    
    <div className="text-center p-3" >
      
      <a className="text-white" href="https://www.pyramidwebdesign.com.ar/">Pyramid Web Design</a>
    </div>
    
  </footer>



)




}