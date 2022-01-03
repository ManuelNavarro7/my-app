
import React,{useState, useEffect,useContext} from 'react' 
import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import NavBarComponent from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/Item';


import Cart from './components/Cart';


import CustomProvider, { shopContext } from './context/carContext';




function App() {

 


 const Nav=()=><NavBarComponent></NavBarComponent>

 
 
 //const Store =()=><ItemListContainer val="Bienvenido a la Tienda"></ItemListContainer>
 
 const Detalle =()=><ItemListContainer></ItemListContainer>
 
 const Item =()=><ItemDetail></ItemDetail>

 

 const CartFinal =()=><Cart></Cart>



 const {id}=useParams()

 useEffect(()=>{console.log(id)},[id])

 //const ThemeContext = React.createContext()

 //const [isDarkMode, setDarkMode]=useState(true)

 {/*const ContextComponent =()=>{
   const contextValue = useContext(ThemeContext)
   return <p>{contextValue}</p>
 }*/}

 //window.addEventListener('click', (e)=> console.log(e))
 //window.addEventListener('evento', (e)=> console.log(e))
  
  return (
    
    <CustomProvider>

    <BrowserRouter>
    
    
    <Nav/>
    
    <Routes>

      <Route exact path = "/" element={<Detalle></Detalle>}></Route>
     
      <Route exact path = "/Store/Detalle/:id" element={<Item></Item>}></Route>
      <Route exact path = "/Store/Cart" element={<CartFinal/>}></Route>
      

    </Routes>
    
    </BrowserRouter>
    </CustomProvider>
    
  );
}

export default App;
