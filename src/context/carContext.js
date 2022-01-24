import React, { useContext, createContext,useState,useRef,useEffect } from "react";
import{doc ,docs, getDocs, getFirestore,collection,addDoc,} from "firebase/firestore"



export const shopContext = createContext()


const {Provider}= shopContext

const CustomProvider = ({children})=>{

  const db= getFirestore();

    const [Data, setData]=useState([])

    const [compraSniker , setcompraSniker]=useState([])

    const [isDarkMode, setDarkMode]=useState('dark')

    const [Total, setTotal]=useState([])

    const [NewData, setNewData] = useState()

    const [FinalData, setFinalData] = useState()

    const [FinalCheckOut, setFinalCheckOut]= useState([])

    const value ={
      productos: [Data]
 
    }

    useEffect(()=>{
      const db = getFirestore();
      const data= collection(db, "items")
      getDocs(data).then((res)=>{
      //console.log(res.docs.map((doc)=>({id: doc.id,...doc.data()})))
      setData (res.docs.map((doc)=>({id: doc.id,...doc.data()})))
      }) 
      },[])




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


    useEffect(()=>{
      const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
      if(dataCarrito){
        setcompraSniker(dataCarrito)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('dataCarrito', JSON.stringify(compraSniker))
    },[compraSniker])



    const removeProductos = id =>{
      if(window.confirm("¿Quieres suspender el producto?")){
        compraSniker.forEach((item, index)=>{
          if(item.id === id){
            item.cantidad = 1;
            compraSniker.splice(index, 1)
          }
        })
        setcompraSniker([...compraSniker])
      }
    }
    
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
        if(item.id === id){
          item.cantidad +=1;
        }
        setcompraSniker([...compraSniker])
      })
    }


    useEffect(() =>{
      const getTotal = () =>{
        const res = compraSniker.reduce((prev, item) =>{
          return prev + (item.price * item.cantidad)
        },0)
        setTotal(res)
      }
      getTotal()
    },[compraSniker])
  

  
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

//=================================ultima clase firebase





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



const handleSubmit =(e)=>{
  e.preventDefault()
  
  const newItem = {nombre:e.target[0].value,precio:{Total}}
  const data = collection(db, "order")
  addDoc(data,newItem).then((res)=>{
      //console.log(res.id)
      setNewData(res.id)
      
  })
  
  
  
}
//===============================================================================

  



   











return (
    <Provider value={{isDarkMode,compraSniker,carrito,Data,handleSubmit,FinalData,value,removeProductos,reduce,increase,Total,FinalCheckOut,FormFinal }}>

        {children}
    </Provider>
)
}
export default CustomProvider