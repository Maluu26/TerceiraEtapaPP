import "./Welcome.css";
import Button from "./components/buttons/button";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import avatar from "./assets/Avatar.svg";
import encejLogo from "./assets/Logo-Encej.svg";

function ShowRooms() {
  return (
    <section>
      <Header avatarPic={avatar} encejLogo={encejLogo}></Header>
      <div className="centro">
        <div className="welcome">
          <h1>Boas Vindas, Fulano</h1>
        </div>

        <div className="reserva-text-button">
          <p>
            Você deverá escolher um quarto dentre os disponibilizados. Caso
            queira trocar de quarto, basta escolher outro quarto que têm vagas
            disponíveis até a data limite. Para ver detalhadamente as
            informações de cada quarto, escolha a opção “ver quartos”.
          </p>
          <form>
            <Button insideText="Ver quartos" className="button-style"></Button>
          </form>
        </div>
        
      </div>
      <Footer></Footer>
    </section>
  );
}

export default ShowRooms;
