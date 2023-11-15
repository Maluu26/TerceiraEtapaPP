import encejLogo from "./assets/Logo-Encej.svg";
import Button from "./components/buttons/button";
import Footer from "./components/footer/footer";

import "./Cadastro.css";

function CadastroPage() {
    return (
        <section>
            <div>
                <div className=" img_centro">
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
                                placeholder="Email" />
                        </div>
                        <div>
                            <input
                                className="cadastro-input"
                                type="text"
                                id="empresa"
                                name="empresa"
                                placeholder="Empresa Junior" />
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
