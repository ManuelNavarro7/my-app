import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import{doc ,docs, getDocs, getFirestore,collection,addDoc,} from "firebase/firestore"



export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{

  const db= getFirestore();

    const [Data, setData]=useState([])

    const [compraSniker , setcompraSniker]=useState([])

    const [texto, settexto]=useState('')

    const [pBuscado, setpBuscado]= useState([])

    const [Total, setTotal]=useState([])

    const [NewData, setNewData] = useState()

    const [FinalData, setFinalData] = useState()

    const [FinalCheckOut, setFinalCheckOut]= useState([])

    const value ={
      productos: [Data]
 
    }


  //==========================================Firestore =========================

    useEffect(()=>{
      const db = getFirestore();
      const data= collection(db, "items")
      getDocs(data).then((res)=>{
      //console.log(res.docs.map((doc)=>({id: doc.id,...doc.data()})))
      setData (res.docs.map((doc)=>({id: doc.id,...doc.data()})))
      }) 
      },[])



//======================================== Agregar al Carrito===================
    function carrito(e){

        let id = e.target.getAttribute("id")
       


        if(compraSniker !=null){
             const check = compraSniker.every(item=>{return item.id !==id} )

             if(check){
              const producto = Data.find(el => el.id === id)
            setcompraSniker([...compraSniker, producto])
              console.log(localStorage)
             }
          
        }
        

    }
//==============================================================================

//================================== Local Storage===================
    useEffect(()=>{
      const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
      if(dataCarrito){
        setcompraSniker(dataCarrito)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('dataCarrito', JSON.stringify(compraSniker))
    },[compraSniker])

//=====================================================================


//================================== Borrar Producto===================

    const removeProductos = id =>{
      
        compraSniker.forEach((item, index)=>{
          if(item.id === id){
            item.cantidad = 1;
            compraSniker.splice(index, 1)
          }
        })
        setcompraSniker([...compraSniker])
      
    }

//================================== Cantidad de Productos===================
    
    const reduce = id =>{
      compraSniker.forEach(item =>{
        if(item.id === id){
          item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
        }
        setcompraSniker([...compraSniker])
      })
    }
    const increase = id =>{
      compraSniker.forEach(item =>{
        if(item.id === id && item.cantidad < 10){
          item.cantidad +=1;
        }
        setcompraSniker([...compraSniker])
      })
    }
//================================================================================

//======================================= Talle ==================================
 
const reduceTalle = id =>{
  compraSniker.forEach(item =>{
    if(item.id === id && item.talle >37){
      item.talle === 37 ? item.talle = 37: item.talle -=1;
    }
    setcompraSniker([...compraSniker])
  })
}
const increaseTalle = id =>{
  compraSniker.forEach(item =>{
    if(item.id === id && item.talle < 45){
      item.talle +=1;
    }
    setcompraSniker([...compraSniker])
  })
}

//================================================================================

//========================================== Total =======================
    useEffect(() =>{
      const getTotal = () =>{
        const res = compraSniker.reduce((prev, item) =>{
          return prev + (item.price * item.cantidad)
        },0)
        setTotal(res)
      }
      getTotal()
    },[compraSniker])
  
//=================================================================================
  
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

//=================================ultima clase firebase ========================





useEffect(()=>{
  const data = collection(db, "order")
        getDocs(data).then((res)=>{
           // console.log(res.docs)
            //console.log(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            setFinalData(res.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            //console.log(FinalData)
        })
        //====================== useeffect
  
  },[NewData])


function FormFinal(){
  setFinalCheckOut([])

}

  useEffect(()=>{

    if(NewData !=null){
      
        const id= NewData
        const producto = FinalData.find(el => el.id === id)
        setFinalCheckOut([producto])
        setcompraSniker([])
        localStorage.clear()
    }
  },[FinalData])

//===================================================================================

//===========================================Finalizar compra=========================

const handleSubmit =(e)=>{
  e.preventDefault()
  
  const newItem = {nombre:e.target[0].value,precio:{Total},Dni:e.target[1].value,mail:e.target[2].value, productos:{compraSniker}}
  console.log(e.target[1])
  const data = collection(db, "order")
  addDoc(data,newItem).then((res)=>{
      //console.log(res.id)
      setNewData(res.id)
      
  })
  
  //console.log("click")
  
}




//============================================= Buscador ==================================

  

const handleInputChange1=({target})=>{
    settexto(target.value.toLowerCase())
}

const handleSubmitinput =(e)=>{
  e.preventDefault()
  
  settexto(texto)

  console.log(texto)
  const produc = Data.find(producto=>producto.name.toLowerCase() === texto)

  
  
  
}












return (
    <Provider value={{compraSniker,carrito,Data,handleSubmit,FinalData,value,removeProductos,reduce,increase,Total,FinalCheckOut,FormFinal,reduceTalle,increaseTalle,handleInputChange1,handleSubmitinput,texto}}>

        {children}
    </Provider>
)
}
export default CustomProvider