import './App.css';
import styled from "styled-components"
import Cart from './component/Cart/Cart';
import Nav from './component/Navbar/Nav';
import Product from './component/products/Product';
import Login from './component/login/Login';
import {Route,Routes} from 'react-router-dom'
import Detail from './component/detail/Detail';
function App() {
  return (
    <>
    <div className='nav'>
    <Nav/>
    </div>
     <Routes>
       <Route path='/' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/detail' element={<Detail/>}/>
       <Route path='/login' element={<Login/>}/>
       </Routes>                                                                                               
    </>                      
  );
}

export default App;
