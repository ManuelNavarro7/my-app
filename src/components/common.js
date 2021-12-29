import React from 'react' 
import Button from 'react-bootstrap/Button'

const ComponentCommon={

    ButonBlack:(props)=>(<Button variant="dark">{props.id}</Button>),
    Title1:({text,estilo})=>(<h1 className={estilo}>{text}</h1>),
    Title2:()=>(<h2>Jabon</h2>),
    botonprueba:()=>(<button onClick={onCLick}>Click me</button>),
    Submit:()=>(<form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type='submit'>Submit</button>
    </form>)
}

function onCLick(evt){

      console.log('You click me')
}

//const event = new CustomEvent('Bubbles')

const handleSubmit =(evn)=>{
    evn.preventDefault()
    //window.dispatchEvent(event)
    evn.stopPropagation()
    console.log(evn)
   
}


 export default ComponentCommon;