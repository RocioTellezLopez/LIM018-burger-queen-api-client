
import './App.css';
import Login from './components/ScreenView/Login/Login';
import Waiter from './components/ScreenView/waiter/Waiter';
import Admin from './components/ScreenView/admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // una variable de estado useState manejo de user, valor iniciar null
  // cambio de estado segun su roll 

  // useState, useEffect
  // levantar el stado

  return (
    // condicional para saber si users es if (users === null) {<Route exact path="/" element={<Login />}></Route>}
    // else (<Route exact path="/waiter" element={<Waiter />}></Route>)
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/waiter' element={<Waiter />}></Route>
        <Route exact path='/admin' element={<Admin />}></Route>  
      </Routes>
   </BrowserRouter>
   );
}

export default App;
