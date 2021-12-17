import React,{useState, useEffect} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'

const SaludoRecepcion={
    Saludo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>{props.value}</h1>),
    Store:(props)=>(<h2 className='Titulo1 d-flex justify-content-center'>{props.value}</h2>)
}


function Itemx() {

    const [sniker, setSniker]=(useState([]))
    
      const arrAux= new Promise((resolve,reject)=>{
        setTimeout(()=>{
        setSniker([{id:1,name:"Air Jordan Low",price:"$2000",img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000"},{ id:2,name:"Air Jordan Low",price:"$2500",img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg"},{ id:3,name:"Air Jordan j balvin",price:"$50000",img: "https://www.zapatillasysneakers.com/sites/default/files/static/images/news/zapatillas_air_jordan_1_j._balvin_.png"}])
        resolve(true)
      },2000)
      })
    
      arrAux.then()
    
      return(
    
    <div>
    {
               sniker.map((valorActual)=>{
                 return (
                 <div key={valorActual.id} id={valorActual.id}>
                 <img src={valorActual.img} width="300px" height="300px"></img>
                 <p>{valorActual.name}</p>
                 <p>{valorActual.price}</p>
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
        <SaludoRecepcion.Saludo value={props.val}/>
        <Itemx></Itemx>
        <SaludoRecepcion.Store value={'Store'}/>
       </div>
    )
}


export default ItemListContainer;