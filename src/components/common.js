import React from 'react' 
import Button from 'react-bootstrap/Button'

const ComponentCommon={

    ButonBlack:(props)=>(<Button variant="dark">{props.id}</Button>),
    Title1:({text,estilo})=>(<h1 className={estilo}>{text}</h1>),
   
    
}


 export default ComponentCommon;