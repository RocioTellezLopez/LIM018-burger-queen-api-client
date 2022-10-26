/* eslint-disable jsx-a11y/alt-text */
import '../Login.css';
function Login() {
    return (
    <section className='component-login'>
      {/* <picture style={{display: 'block'}}>
        <img src='https://cdn.stockai.com/detail/1663811319856-57462341-9fb6-4c13-ad5e-06e05b4bf727-768.jpg'></img>
      </picture>https://i.ibb.co/SxtmtC1/Captura-de-pantalla-2022-10-26-094956.jpg
      <div> */}
      <div className='div-login'>
        <div> <img className='logo' src='https://i.ibb.co/4dcV7Vp/burgerq.png'></img></div>
        <form className="form-login">
            <label>
              <input type='email' name='name' placeholder= 'Ingrese tu email' />
            </label>
            <label>
              <input type='password' name='name' placeholder='ingrese la contraseña'/>
            </label>
            <input className= 'button' type='submit' value='Iniciar sesión' />
        </form>
      </div>
        
      {/* </div> */}
    </section>
        
    );
  }
  
  export default Login;