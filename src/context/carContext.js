import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import { NavLink , useParams} from 'react-router-dom'
import Item from "../components/Item";
import Cart from "../components/Cart";

export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{

    const [sniker, setSniker]=(useState([]))

    const [compraSniker , setcompraSniker]=useState([])

    const [cartLength, setCartlength]=useState([])

    const [isDarkMode, setDarkMode]=useState('dark')

    function Itemx() {
  
  
       
        
          const arrAux= new Promise((resolve,reject)=>{
            setTimeout(()=>{
            setSniker([{id:'1',name:"Air Jordan Low",price:2000,stock:10,img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000"},{ id:'2',name:"Air Jordan Low",price:2500,stock:10,img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg"},{ id:'3',name:"Nike AF-1 stussi",price:50000,stock:10,img: "https://www.coolzapas.es/wp-content/uploads/2021/01/CZ9084200_FOSS_1_720x.jpg"}])
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
                     <img src={valorActual.img} style={{width:300, height:300}} alt=""/>
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
    
    
    
    
    function ItemCount({initialValue,stock,precio,id}){




        const titulox={
            titulo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>compra{state}</h1>),
            titulo2:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>stock{state1}</h1>),
            titulo3:(props)=>(<h1 className='Titulo1 d-flex justify-content-center' value={state3}>total ${state3}</h1>),
            botoncontmas:(props)=>(<button onClick={handleClick}>{props.value} </button>),
            botoncontmenoss:(props)=>(<button onClick={handleClick1}>{props.value} </button>),
            botoncoBorrar:(props)=>(<button onClick={handelBorrar} value={id}>borrar</button>),
            
        }
    
        let [state,setState]=useState(initialValue);
        let [state1,setState1]=useState(stock);
        let [state2,setState2]=useState(precio);
        let [state3,setState3]=useState(initialValue * precio);


        const handleClick =(e)=>{
            
          
            
            e.preventDefault()
            if(state<stock){
           
                setState(++state)
                setState3(precio * state)
                
                
           
            }
            
          }
          const handleClick1 =()=>{
            
            if(state<stock && state!=0){
           
                setState(--state)
                setState3(state * state2)
           
            }
            
          }
          const handelBorrar =(e)=>{
            
            let id = e.target.getAttribute("value")
            console.log(id)

            if(compraSniker !=0){
            const productosNuevos = compraSniker.filter(el => el.id !== id)
            console.log(productosNuevos)
            setcompraSniker(productosNuevos)
            setCartlength(compraSniker.length - 1)
            
            }
            

            
          }
          
    
            return(
               
         <div >
          <section>
         <titulox.titulo></titulox.titulo>
         <titulox.titulo3></titulox.titulo3>
       
         </section>
         <section className='d-flex flex-row justify-content-center align-items-center'>
         <titulox.botoncontmas value='+'></titulox.botoncontmas>
         <titulox.botoncontmenoss value='-'></titulox.botoncontmenoss>
         <titulox.botoncoBorrar></titulox.botoncoBorrar>
         </section>
       
          
        </div>
               
    
            )
           
    
    
    }




    

   
    const CantidadParaCompra = useRef();


    function carrito(e){

        let id = e.target.getAttribute("id")
        
        let ED = parseInt(CantidadParaCompra.current.value)


        if(compraSniker !=null){
             const check = compraSniker.every(item=>{return item.id !==id} )

             if(check){
              const producto = sniker.find(el => el.id === id)
              Object.defineProperty(producto,'InputX',{value:{ED}})
              setCartlength(compraSniker.length + 1)
              setcompraSniker([...compraSniker, producto])


             }
          
        }
        

    }
    

  

//=============================== Clase

const ClaseEj =()=>{

    //const {id}=useParams()
    const [state, setState]= useState(true)
   
    {/*useEffect(()=>{
      console.log(id) 
      setState(id)
     return(console.log(id))
      },[id])*/}
   if(state){
       return <div>Hola</div>
   }
      return(
       <div>{state ? 'true' : 'false'}</div>
       )
   
   }
        
//=============================== Clase









return (
    <Provider value={{isDarkMode,ItemCount,compraSniker,cartLength,carrito,sniker,CantidadParaCompra,Itemx,}}>

        {children}
    </Provider>
)
}
export default CustomProvider