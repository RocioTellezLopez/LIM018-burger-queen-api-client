import logo from './logo.svg';
import './App.css';
import Login from './components/ScreenView/Login/Login';
import Waiter from './components/ScreenView/waiter/Waiter'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // <Login />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/waiter" element={<Waiter />}></Route>
      </Routes>
   </BrowserRouter>
   );
}

export default App;
