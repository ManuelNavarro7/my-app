import React,{useState, useEffect} from 'react' 
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'

const SaludoRecepcion={
    Saludo:(props)=>(<h1 className='Titulo1 bannerInicio d-flex justify-content-center'></h1>),
    
    
}


function Itemx() {

    const [sniker, setSniker]=(useState([]))
    
      const arrAux= new Promise((resolve,reject)=>{
        setTimeout(()=>{
        setSniker([{id:1,name:"Air Jordan Low",price:"$2000",img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000"},{ id:2,name:"Air Jordan Low",price:"$2500",img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg"},{ id:3,name:"Nike AF-1 stussi",price:"$50000",img: "https://www.coolzapas.es/wp-content/uploads/2021/01/CZ9084200_FOSS_1_720x.jpg"}])
        resolve(true)
      },1000)
      })
    
      arrAux.then()
    
      return(
    
    <div>
    {
               sniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id} id={valorActual.id} className='d-flex flex-column justify-content-center align-items-center'>
                 <img src={valorActual.img} width="300px" height="300px"></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
                 <NavLink to ={`/Store/Detalle/${valorActual.id}`}>Detalle</NavLink>
                 </div>
                 )
                 
               })
              }
    </div>
    
      )
        
    }



function ItemListContainer(props){
    return(
        <div>
        <SaludoRecepcion.Saludo value={props.val} />
        <Itemx></Itemx>
        
       </div>
    )
}



export default ItemListContainer;