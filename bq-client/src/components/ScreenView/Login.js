/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import '../Login.css';


function Login() {

  // Hook useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // funcion para el input email
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setEmail(event.target.value);
  }

  // funcion para el input email
  const handlePasswordChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setPassword(event.target.value)
  }
  
  // funcion para mostar los datos ingresados en consola.
  const enviarDatos = (event) => {
    event.preventDefault()
    console.log(`Inputs -> ${email} ${password} `)
  }

  return (
    <section className='component-login'>
      {/* <Example /> */}
      <div className='div-login'>
        <div><img className='logo' src='https://i.ibb.co/4dcV7Vp/burgerq.png'></img> </div>
        <form className="form-login" onSubmit={enviarDatos}>
          <label>
            <input type='text' name='name' placeholder='Ingrese tu email' onChange={handleInputChange} />
          </label>
          <label>
            <input type='password' name='name' placeholder='ingrese la contraseña' onChange={handlePasswordChange}/>
          </label>
          <input className='button' type='submit' value='Iniciar sesión' />
          
        </form>
      </div>
    </section>
  );
}

export default Login;