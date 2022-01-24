import React,{useState, useEffect,useContext,useRef} from 'react' 
import { NavLink , useParams} from 'react-router-dom'

import { shopContext } from '../context/carContext'


export default function TicketFinal(){


    const {FinalCheckOut} = useContext(shopContext)

    

    return(
        <div>
            {
                      FinalCheckOut.map((valorActual)=>{
                        return (
                        <div key={valorActual.id}  id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                        <div>{valorActual.id}</div>
                        <div>{valorActual.nombre}</div>
                        
                       
                         
           
                       
                        </div>
                        )
                        
                      })

            }
        </div>
    )



}