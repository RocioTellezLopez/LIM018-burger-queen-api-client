/* eslint-disable jsx-a11y/alt-text */
import '../Login.css';
function Login() {
    return (
    <section className='component-login'>
      <div> <img className='logo' src="https://i.ibb.co/SxtmtC1/Captura-de-pantalla-2022-10-26-094956.jpg"></img></div>
      <div className='form-div'>
      <form className="form-login">
          <label>
            <input type="text" name="name" value="Ingrese el email" />
          </label>
          <label>
            <input type="text" name="name" value="ingrese la contraseña"/>
          </label>
          <input type="submit" value="Iniciar sesión" />
        </form>
        </div>
    </section>
        
    );
  }
  
  export default Login;