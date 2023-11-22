import encejLogo from "./assets/Logo-Encej.svg";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

import "./Cadastro.css";
import { ChangeEvent, useState } from "react";

function CadastroPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [status, setStatus] = useState("");

  const handleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleEmpresaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEmpresa(event.target.value);
  };

  const handleCadastroClick = async () => {
    try {
      const response = await fetch(
        "https://wldzajo7ka.execute-api.us-east-1.amazonaws.com/dev/person",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            empresa: empresa,
          }),
        }
      );
      const result = await response.json();

      console.log(response)

    } catch (error) {
      // Lida com erros durante a requisição
      console.error("Erro na requisição:", error);

      // Atualiza o estado de status com base no erro
      setStatus("error");
    }
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
                value={nome}
                onChange={handleNomeChange}
              />
            </div>
            <div>
              <input
                className="cadastro-input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="select-div">
              <select
                className="ej-select"
                value={empresa}
                onChange={handleEmpresaChange}
              >
                <option value="" disabled hidden>
                  Empresa Júnior
                </option>
                {/* Adicionar opções conforme o backend */}
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
                value={senha}
                onChange={handleSenhaChange}
              />
            </div>
            <div>
              <Button
                insideText="Cadastrar"
                className="login-button"
                onClick={handleCadastroClick}
              ></Button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
export default CadastroPage;
