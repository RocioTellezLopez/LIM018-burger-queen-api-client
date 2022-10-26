import logo from './logo.svg';
import './App.css';
import Login from './components/ScreenView/Login';
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
      </Routes>
   </BrowserRouter>
   );
}

export default App;
