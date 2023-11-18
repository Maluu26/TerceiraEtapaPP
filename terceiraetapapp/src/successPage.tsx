import checkIcon from "./assets/check.svg";
import avatar from "./assets/Avatar.svg";
import roomStats from "./assets/empty-room.svg"; //exemplo
import Button from "./components/buttons/button";

import "./successPage.css";
import HeaderPerson from "./components/header/headerPerson";

function successPage() {
  return (
    <section>
      <div className="margin-top"></div>
      <div className="sucesso">
        <img src={checkIcon} />
        <h1>Sucesso!</h1>
      </div>
      <div className="room-details">
        <div className="room-capacity">
          <h1>Você está no quarto 4!</h1>
          <img src={roomStats} className="room-capacity-img" alt="" />
        </div>

        <div className="people-column">
          <HeaderPerson avatarPic={avatar}></HeaderPerson>
          <HeaderPerson avatarPic={avatar}></HeaderPerson>
          <HeaderPerson avatarPic={avatar}></HeaderPerson>
          <HeaderPerson avatarPic={avatar}></HeaderPerson>
        </div>
      </div>
      <div className="margin-top"></div>
      <Button insideText="Voltar" className=""></Button>
      <div className="margin-top"></div>
    </section>
  );
}

export default successPage;
