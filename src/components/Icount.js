
import {useState, useEffect} from 'react';
import React from 'react';




  function Inter({type}){

    const [count, setCount]=useState(1)

    const handleClick=(e)=>{
        console.log('funcionalidad')
    }
    const Test =()=>{
        return(
            <select>
                <option onSelect={handleClick}>Hola</option>
                <option>Adios</option>
            </select>
        )
    }
    const Test2 =()=>{
        return(
            <form>
            <input type="email"></input>
            <button onClick={handleClick}>Test2</button>
            </form>
        )
    }

    {/*useEffect(()=>{
      type == "par" ?
    setCount(count*2):
    setCount(count*3)

    },[type])*/}
    
    return(
        <>
        {type == "carro" ? 
        <Test></Test> :
        <Test2></Test2>}
        </>
    )
  }

  export default Inter;