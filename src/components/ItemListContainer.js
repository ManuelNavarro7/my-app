import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'

const SaludoRecepcion={
    Saludo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>{props.value}</h1>),
    
}

function ItemListContainer(props){
    return(
        <SaludoRecepcion.Saludo value={props.val}/>
       
    )
}


export default ItemListContainer;