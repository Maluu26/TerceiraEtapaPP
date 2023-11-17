import "./ProfilePage.css";
import Button from "./components/buttons/button";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import RoomCard from "./components/room-card/roomCard";

import avatar from "./assets/Avatar.svg";
import encejLogo from "./assets/Logo-Encej.svg";

function ProfilePage() {
  return (
    <section>
      <Header avatarPic={avatar} encejLogo={encejLogo}></Header>
      <div className="centro">
        <h1>Informações do usuário</h1>
        <form className="edit-inputs edit-inputs-fixed">
          <div>
            <input
              className="edit-input edit-input-fixed"
              type="text"
              id="nome"
              name="nome"
              placeholder="João Rodrigues de Souza Lima"
              readOnly
            />
          </div>
          <div>
            <input
              className="edit-input edit-input-fixed"
              type="text"
              id="email"
              name="email"
              placeholder="joao@gmail.com"
              readOnly
            />
          </div>
          <div>
            <input
              className="edit-input edit-input-fixed"
              type="text"
              id="Ej"
              name="Ej"
              placeholder="CT Junior"
              readOnly
            />
          </div>
        </form>
      </div>
      <RoomCard
        roomName="Quarto 1"
        status="disponivel"
        onDetailsClick={ProfilePage}
      ></RoomCard>
      <div className="margin-top"></div>
      <Footer></Footer>
    </section>
  );
}

export default ProfilePage;
