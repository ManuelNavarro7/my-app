
import React,{useState, useEffect} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import NavBarComponent from './components/NavBar';
import Shell from './components/Shell';
import ItemListContainer from './components/ItemListContainer';
import ComponentCommon from './components/common';
import ItemCountx from './components/ItemCount';
import Itd from './components/ItemD';






function App() {

  
  return (
    <div>

      <header>
      <NavBarComponent>
      <div>1</div>
      <div>Contacto</div>
      </NavBarComponent>
      <ItemListContainer val="Bienvenido a la Tienda"></ItemListContainer>
      
      <ComponentCommon.ButonBlack id='Buy'></ComponentCommon.ButonBlack>
      <ComponentCommon.Title1 text='on-line' estilo='colorPrueba'></ComponentCommon.Title1>
      <ComponentCommon.Title2 id='Buy'></ComponentCommon.Title2>
      <ItemCountx></ItemCountx>
      
     <Itd></Itd>
   
      
      </header>
      
    </div>
  );
}

export default App;
