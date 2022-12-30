/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Logo from '../../staticComponents/Logo/Logo.js';
import ErrModal from '../../staticComponents/Modal/ErrorMessage';
import { useNavigate } from 'react-router-dom';


function Login() {

  // Hook useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [existeError, setExisteError] = useState();

  // funcion para el input email
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  }

  // funcion para el input email
  const handlePasswordChange = (event) => {
    // console.log(event.target.name)
    setPassword(event.target.value)
  }
  
  // funcion para mostar los datos ingresados en consola.

  const navegate = useNavigate();

  const enviarDatos = (event) => {
    event.preventDefault();
    if (email !== '' & password !== '') {
      axios.post('http://localhost:3000/auth', {
      email: email,
      password: password
      })
        .then((res) => {
          console.log('Inicio de sesión con exito!')
          console.log('axios', res.data) // Cambio de vista
          navegate('/waiter')
          
        })
        .catch((error) => {
          console.log('Error al iniciar sesión'); // mensaje de error en Login
          console.log('err', error);
          setExisteError(true);
        });
    } else {
      alert('Ingrese todos los datos');
    }
    
  }

  return (
    <section className='component-login'>
      {/* <Example /> */}
      <div className='div-login'>
        <Logo className='logo' />
        <form className="form-login" onSubmit={enviarDatos}>
          <label>
            <input type='text' name='name' placeholder='Ingrese tu email' onChange={handleInputChange} />
          </label>
          <label>
            <input type='password' name='name' placeholder='ingrese la contraseña' onChange={handlePasswordChange}/>
          </label>
          <input className='button' type='submit' value='Iniciar sesión' />
        </form>
        {existeError? <ErrModal message = {'Usuario no registrado!'} setExisteError = {setExisteError}/> : ''}
      </div>
    </section>
  );
}

export default Login;