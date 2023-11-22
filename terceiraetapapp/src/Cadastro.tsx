import encejLogo from "./assets/Logo-Encej.svg";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

import "./Cadastro.css";
import { ChangeEvent, useState } from "react";

function CadastroPage() {
  const [companyName, setCompanyName] = useState("");
  const handleCompanyNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCompanyName(event.target.value);
  };
  return (
    <section>
      <div>
        <div className="encej-logo-div">
          <img src={encejLogo} />
        </div>
        <div className="reserva">
          <h1>Cadastro</h1>
          <form className="cadastro-inputs">
            <div>
              <input
                className="cadastro-input"
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
              />
            </div>
            <div>
              <input
                className="cadastro-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="select-div">
              <select className="ej-select" value={companyName} onChange={handleCompanyNameChange}>
                <option value="" disabled hidden>
                  Empresa Júnior
                </option>
                <option value="Empresa 1">CT Junior</option>
                <option value="Empresa 2">Adapti</option>
                <option value="Empresa 3">Zetta</option>
                <option value="Empresa 4">Biológica</option>
                <option value="Empresa 5">Archipolis</option>
                <option value="Empresa 6">Projagro</option>
                <option value="Empresa 7">Energy</option>
                <option value="Empresa 8">Projeta</option>
                <option value="Empresa 9">EDV</option>
                <option value="Empresa 10">CJA</option>
              </select>
            </div>
            <div>
              <input
                className="login-input"
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
              />
            </div>
            <div>
              <Button insideText="Cadastrar" className="login-button"></Button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
export default CadastroPage;
