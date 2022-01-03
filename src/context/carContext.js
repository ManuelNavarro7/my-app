import React, { useContext, createContext,useState } from "react";
import Item from "../components/Item";
import Cart from "../components/Cart";

export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{


    window.addEventListener('clickDetalle',(e)=>{
      
     
        setcompraSniker([...compraSniker,e.detail.data.resultado])

        setCartlength(compraSniker.length + 1)
       
        console.log(e.detail.data.resultado)

        console.log(e)
  
    })

    window.addEventListener('clickResta',(e)=>{
      
     
        console.log(e.detail.data.e.nativeEvent.path[1].id)

        const AA= e.detail.data.e.nativeEvent.path[1].id

      const resultado = compraSniker.find( Zapatillas => Zapatillas.id != AA );

      console.log(resultado)

      setcompraSniker([resultado])

      console.log(compraSniker)
      setCartlength(compraSniker.length - 1)
    })
    

    
   

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

    function eventHelper(params){
        window.dispatchEvent('click')
    }

    function eventHelper1(params){
        const event= new CustomEvent('evento')
        window.dispatchEvent(event)
    }
    const [compraSniker , setcompraSniker]=useState([])

    const [cartLength, setCartlength]=useState()

    console.log(compraSniker)
    console.log(cartLength)
    


    





return (
    <Provider value={{isDarkMode,ItemCount,compraSniker,cantidad,cartLength}}>

        {children}
    </Provider>
)
}
export default CustomProvider