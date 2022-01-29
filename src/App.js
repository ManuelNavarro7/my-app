
import React,{useState, useEffect,useContext} from 'react' 
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import NavBarComponent from './components/NavBar';
import ItemDetail from './components/Item';
import Cart from './components/Cart';
import CustomProvider, { shopContext } from './context/carContext';
import  ItemFirebase from './components/Firestore';
import 'boxicons';
import FormFinal from './components/Form';
import Footer from './components/footer';

function App() {

 const Nav=()=><NavBarComponent></NavBarComponent>

 const Detalle =()=><ItemFirebase></ItemFirebase>
 
 const Item =()=><ItemDetail></ItemDetail>

 const CartFinal =()=><Cart></Cart>

 const CheckOut = ()=><FormFinal></FormFinal>

 const Foot =()=><Footer></Footer>

 const params =useParams()

 useEffect(()=>{
   console.log(params)
  return (console.log(params))
  },[])

  
  return (
    
    <CustomProvider>

    <BrowserRouter>
    
    
    <Nav/>
    
    <Routes>

      <Route exact path = "/" element={<Detalle></Detalle>}></Route>
     
      <Route exact path = "/Store/Detalle/:id" element={<Item></Item>}></Route>
      <Route exact path = "/Store/Cart" element={<CartFinal/>}></Route>
      <Route exact path = "/Store/CheckOut" element={<CheckOut/>}></Route>

    </Routes>
    
    <Foot/>

    </BrowserRouter>

    
    </CustomProvider>
    
  );
}

export default App;
