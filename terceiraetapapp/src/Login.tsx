import encejLogo from "./assets/Logo-Encej.svg";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

import "./Login.css";

function LoginPage() {
  return (
    <section>
      <div>
        <div className=" encej-logo-div">
          <img src={encejLogo} />
        </div>
        <div className="reserva">
          <h1>Reserva de Quartos</h1>
          <p> Faça o login para continuar</p>
          <form className="login-inputs">
            <div>
              <input
                className="login-input"
                type="text"
                id="email"
                name="email"
                placeholder="carlos.rodriguez"
              />
            </div>
            <div>
              <input
                className="login-input"
                type="password"
                id="senha"
                name="senha"
                placeholder="**************"
              />
            </div>
            <div>
              <Button insideText="Entrar" className="login-button"></Button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
export default LoginPage;
