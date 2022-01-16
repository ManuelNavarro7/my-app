import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import{doc ,docs, getDocs, getFirestore,collection} from "firebase/firestore"



export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{


    const [Data, setData]=useState([])

    const [compraSniker , setcompraSniker]=useState([])

    const [cartLength, setCartlength]=useState([])

    const [isDarkMode, setDarkMode]=useState('dark')


    useEffect(()=>{
      const db = getFirestore();
      const data= collection(db, "items")
      getDocs(data).then((res)=>{
      console.log(res.docs.map((doc)=>({id: doc.id,...doc.data()})))
      setData (res.docs.map((doc)=>({id: doc.id,...doc.data()})))
  }) 
  },[])


   
    const CantidadParaCompra = useRef();
    
    const Talle = useRef();

    function carrito(e){

        let id = e.target.getAttribute("id")
        let PrecioCompra = e.target.getAttribute("value")
        
        let ED = parseInt(CantidadParaCompra.current.value)
        let TalleCompra = parseInt(Talle.current.value)
        let TotalFinal = ED * PrecioCompra

        console.log(TalleCompra)


        if(compraSniker !=null){
             const check = compraSniker.every(item=>{return item.id !==id} )

             if(check){
              const producto = Data.find(el => el.id === id)
              Object.defineProperty(producto,'InputX',{value:{ED}})
              Object.defineProperty(producto,'TotalFinal',{value:{TotalFinal}})
              Object.defineProperty(producto,'TalleCompra',{value:{TalleCompra}})
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
    <Provider value={{isDarkMode,compraSniker,cartLength,carrito,CantidadParaCompra,Talle,Data,}}>

        {children}
    </Provider>
)
}
export default CustomProvider