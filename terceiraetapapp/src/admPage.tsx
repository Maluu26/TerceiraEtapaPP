import RoomCard from "./components/room-card/admRoomCard";
import Header from "./components/header/header";
import Button from "./components/buttons/button";

import avatar from "./assets/Avatar.svg";
import encejLogo from "./assets/Logo-Encej.svg";

function admPage() {
  return (
    <section>
      <Header avatarPic={avatar} encejLogo={encejLogo}></Header>
      <hr className="line" />
      <h1>Painel do administrador</h1>
      <div className="room-cards-container">
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={admPage}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={admPage}
        ></RoomCard>
      </div>
      <div className="margin-top"></div>
      <Button onClick={admPage} insideText="Novo quarto" className=""></Button>
      <div className="margin-top"></div>
    </section>
  );
}

export default admPage;
