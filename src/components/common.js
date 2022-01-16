import React from 'react' 
import Button from 'react-bootstrap/Button'

const ComponentCommon={
    
    Saludo:()=>(<h1 className='Titulo1 bannerInicio d-flex justify-content-center'></h1>),
    ButonBlack:(props)=>(<Button variant="dark">{props.id}</Button>),
    Title1:({text,estilo})=>(<h1 className={estilo}>{text}</h1>),
   
    
}


 export default ComponentCommon;