
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import NavBarComponent from './components/NavBar';
import Shell from './components/Shell';
import ItemListContainer from './components/ItemListContainer';
import ComponentCommon from './components/common';

function App() {

   
  
  return (
    <div>

      <header>
      <NavBarComponent/>
      <ItemListContainer val="Bienvenido a la Tienda"/>
      {/*<Shell nombre='Leonardo' app='mi app'></Shell>*/}
      <ComponentCommon.ButonBlack id='Buy'></ComponentCommon.ButonBlack>
      <ComponentCommon.Title1 text='on-line'></ComponentCommon.Title1>
      <ComponentCommon.Title2 id='Buy'></ComponentCommon.Title2>
       
      </header>
      
    </div>
  );
}

export default App;
