import React from 'react' 
import Button from 'react-bootstrap/Button'

const ComponentCommon={
    
    Banner:()=>(<h1 className='Titulo1 bannerInicio d-flex justify-content-center'></h1>),
    ButonBlack:(props)=>(<Button variant="dark">{props.id}</Button>),
    Title1:({text,estilo})=>(<h1 className={estilo}>{text}</h1>),
    Title:()=>(<h1 className='d-flex justify-content-center align-items-center mt-5'>REVERSE</h1>),
    Decuento:()=>(<p className='mt-5 descuento d-flex justify-content-center align-items-center'> <span className="Bold justify-content-center align-items-center mt-1 me-2"> 10% de descuento </span>  En compras mayores a $30.000</p>),
    Entrega:()=>(<p className='mt-4'> <span className="Bold">Entrega estimada</span> 10 dias a partir de la compra</p>),
}


 export default ComponentCommon;