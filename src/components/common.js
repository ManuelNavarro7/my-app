import React from 'react' 
import Button from 'react-bootstrap/Button'

const ComponentCommon={

    ButonBlack:(props)=>(<Button variant="dark">{props.id}</Button>),
    Title1:({text})=>(<h1>{text}</h1>),
    Title2:()=>(<h2>Jabon</h2>),
}






 export default ComponentCommon;