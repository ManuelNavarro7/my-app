import React,{useState, useEffect} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/itemsprueba.css'


 
 function Itd({initialValue=0,stock=10}) {


    const titulox={
        titulo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>compra{state}</h1>),
        botoncontmas:(props)=>(<button onClick={handleClick}>{props.value} </button>),
        botoncontmenoss:(props)=>(<button onClick={handleClick1}>{props.value} </button>),
    }
    let [state,setState]=useState(initialValue);
    
    const handleClick =()=>{
        
        if(state<stock){
       
            setState(++state)
            
       
        }
        
      }
      const handleClick1 =()=>{
        
        if(state<stock && state!=0){
       
            setState(--state)
            
       
        }
        
      }
   
   const [items,setItems]=useState([]);
 
   useEffect(()=>{
       console.log("me monte");
       db()
   },[]);
 
 
   const db = async ()=>{
       const call = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=zapatillas`)
   ;
 
   if (call.ok){
       const response = await call.json();
       
       setItems(response.results);
       
       
 
   }else{
       call.catch((err)=>{
           throw new Error ("Algo salio mal", err)
       });
   }
 }
   

 const res = items.find(zap=>zap.title="Jaguar")
 console.log(res)

   return (
     <div>
         
     <p>Lista online</p>
     {items.map((item)=>(
         <div key={item.id}>
             <h1>{item.title}</h1>
             <img src={item.thumbnail} alt =""style={{width:120}}/>
             <h4>Precio ${item.price}</h4>
             <titulox.titulo></titulox.titulo>
             <titulox.botoncontmas value='+' id={item.id}></titulox.botoncontmas>
             <titulox.botoncontmenoss value='-'></titulox.botoncontmenoss>
             </div>
     ))}
     
 </div>
   );
 }
 
 
 
 
 



  
export default Itd;