/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Logo from '../staticComponents/Logo';
import '../Login.css';
import axios from 'axios';

function Login() {

  // Hook useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  const enviarDatos = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3000/auth', {
      email: email,
      password: password
    })
      .then((res) => {
        console.log('Inicio de sesión con exito!')
        console.log('fetch', res.data) // Cambio de vista
      })
      .catch((error) => {
        console.log('Error al iniciar sesión') // mensaje de error en Login
        console.log('err', error)
        const mensaje = document.getElementById('mensaje');
        // mensaje.textContent = 'Error al iniciar sesión';
      });
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
          {/* <p id='mensaje'></p> */}

        </form>
      </div>
    </section>
  );
}

export default Login;