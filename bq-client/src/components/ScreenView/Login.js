/* eslint-disable jsx-a11y/alt-text */
function Login() {
    return (
    <section>
      <div> <img src="https://i.ibb.co/SxtmtC1/Captura-de-pantalla-2022-10-26-094956.jpg"></img></div>
      <form>
          <label>
            Correo:
            <input type="text" name="name" />
          </label>
          <label>
            Contraseña:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Iniciar sesión" />
        </form>
    </section>
        
    );
  }
  
  export default Login;