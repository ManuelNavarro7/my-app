import logo from './logo.svg';
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';


function App() {

  const styles={
    color:'black',
    backgroundColor:"white",
  }


const azul={
  color:"blue"
}

  return (
    <div>
      {/*<a className="colorAzul" style={{color:"blue"}}>Hola</a>*/}
      
     
      <header>
      <NavBar/>
        
         
      </header>
      
    </div>
  );
}

export default App;
