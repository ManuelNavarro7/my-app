import React, { useContext, createContext,useState,useRef } from "react";
import Item from "../components/Item";
import Cart from "../components/Cart";

export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{



    
    const sniker=([{id:'1',name:"Air Jordan Low",price:"$2000",img: "https://essential.vteximg.com.br/arquivos/ids/437474-454-423/306-9752_1.jpg?v=637588374387730000",cantidad:'10'},{ id:'2',name:"Air Jordan Low",price:"$2500",img: "https://i.pinimg.com/736x/71/39/6d/71396d0122a14f94d1a01765839e76d2.jpg",cantidad:'10'},{ id:'3',name:"Nike AF-1 stussi",price:"$50000",img: "https://www.coolzapas.es/wp-content/uploads/2021/01/CZ9084200_FOSS_1_720x.jpg",cantidad:'10'}])

    const [isDarkMode, setDarkMode]=useState('dark')

    const cantidad =[]
    
    function ItemCount({initialValue=0,stock=10}){




        const titulox={
            titulo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>compra{state}</h1>),
            titulo2:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>stock{state1}</h1>),
            botoncontmas:(props)=>(<button onClick={handleClick}>{props.value} </button>),
            botoncontmenoss:(props)=>(<button onClick={handleClick1}>{props.value} </button>),
            
        }
    
        let [state,setState]=useState(initialValue);
        let [state1,setState1]=useState(stock);

        const handleClick =(e)=>{
            
            cantidad.push(state+1)
            console.log(cantidad)
            e.preventDefault()
            if(state<stock){
           
                setState(++state)
                

           
            }
            
          }
          const handleClick1 =()=>{
            
            if(state<stock && state!=0){
           
                setState(--state)
               
           
            }
            
          }
    
          
    
            return(
               
         <div >
          <section>
         <titulox.titulo></titulox.titulo>
         </section>
         <section className='d-flex flex-row justify-content-center align-items-center'>
         <titulox.botoncontmas value='+'></titulox.botoncontmas>
         <titulox.botoncontmenoss value='-'></titulox.botoncontmenoss>
         </section>
       
          
        </div>
               
    
            )
    
    
    }



    const [compraSniker , setcompraSniker]=useState([])

    const [cartLength, setCartlength]=useState([])

    const [CantInput, setCantInput]=useState('')

   
    const CantidadParaCompra = useRef();


    function carrito(e){

        let id = e.target.getAttribute("id")
        
        let ED = CantidadParaCompra.current.value

        console.log(id)
        console.log(ED)
        
        const producto = sniker.find(el => el.id === id)

        setCartlength(compraSniker.length + 1)
        setcompraSniker([...compraSniker, producto])
        setCantInput(...CantInput,ED)
        
        console.log(compraSniker)
        
       
    }
    







return (
    <Provider value={{isDarkMode,ItemCount,compraSniker,cantidad,cartLength,carrito,sniker,CantidadParaCompra,CantInput,}}>

        {children}
    </Provider>
)
}
export default CustomProvider