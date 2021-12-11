import React,{useState, useEffect} from 'react' 

 function ItemCount({initialValue=0,stock=10}){




    const titulox={
        titulo:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>compra{state}</h1>),
        titulo2:(props)=>(<h1 className='Titulo1 d-flex justify-content-center'>stock{state1}</h1>),
        botoncontmas:(props)=>(<button onClick={handleClick}>{props.value} </button>),
        botoncontmenoss:(props)=>(<button onClick={handleClick1}>{props.value} </button>),
    }

    let [state,setState]=useState(initialValue);
    let [state1,setState1]=useState(stock);
    const handleClick =()=>{
        
        if(state<stock){
       
            setState(++state)
            setState1(--state1)
       
        }
        
      }
      const handleClick1 =()=>{
        
        if(state<stock){
       
            setState(--state)
            setState1(++state1)
       
        }
        
      }

      

        return(
           
     <div>

     <titulox.titulo></titulox.titulo>
     <titulox.titulo2></titulox.titulo2>
     <titulox.botoncontmas value='+'></titulox.botoncontmas>
     <titulox.botoncontmenoss value='-'></titulox.botoncontmenoss>
     
   
      
    </div>
           

        )


}
export default ItemCount;