
import React,{useState, useEffect} from 'react' 
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import NavBarComponent from './components/NavBar';
import Shell from './components/Shell';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';
import ComponentCommon from './components/common';
import ItemCountx from './components/ItemCount';
import Itd from './components/ItemD';






function App() {

  const Nav =()=><NavBarComponent></NavBarComponent>
  

 //const Store =()=><ItemListContainer val="Bienvenido a la Tienda"></ItemListContainer>
 
 const Detalle =()=><ItemListContainer val='Bienvenidos a la Tienda'></ItemListContainer>

 const Item =()=><Item></Item>

 const Ofertas =()=><Itd></Itd>

 const {id}=useParams()

 useEffect(()=>{console.log(id)},[id])


  
  return (
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route exact path = "/" element={<Detalle></Detalle>}></Route>
      <Route exact path = "/Store/" element={<Detalle></Detalle>}></Route>
      <Route exact path = "/Store/:id" element={<Ofertas></Ofertas>}></Route>
      <Route exact path = "/Store/Detalle/:id" element={<Item></Item>}></Route>
{/*
      <header>
      
      <ItemListContainer val="Bienvenido a la Tienda"></ItemListContainer>
      
      <ComponentCommon.ButonBlack id='Buy'></ComponentCommon.ButonBlack>
      <ComponentCommon.Title1 text='on-line' estilo='colorPrueba'></ComponentCommon.Title1>
      <ComponentCommon.Title2 id='Buy'></ComponentCommon.Title2>
      <ItemCountx></ItemCountx>
      
     <Itd></Itd>
   
      
      </header>
      
*/}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
