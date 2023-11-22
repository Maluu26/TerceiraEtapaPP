import "./roomCard.css";
import fullRoom from "../../assets/full-room.svg";
import availableRoom from "../../assets/available-room.svg";
import emptyRoom from "../../assets/empty-room.svg";
import roomStats from "../../assets/full-room.svg";
import avatar from "../../assets/Avatar.svg";
import Popup from "reactjs-popup";
import HeaderPerson from "../header/headerPerson";
import Button from "../buttons/button";
import ShowRooms from "../../showRooms";
import successPage from "../../successPage";

interface RoomCardProps {
  roomName: string;
  status: "Lotado" | "Disponivel" | "Vazio";
  onDetailsClick: () => void;
}

export default function roomCard({
  roomName,
  status,
  onDetailsClick,
}: RoomCardProps) {
  const backgroundColor = status === "Lotado" ? "red" : "green";

  const iconSrc =
    status === "Lotado"
      ? fullRoom
      : status === "Disponivel"
      ? availableRoom
      : emptyRoom;

  return (
    <div className="room-card">
      <div className="left-section">
        <div>
          <h1>{roomName}</h1>
        </div>
        <div>
          <p style={{ backgroundColor }}>{status}</p>
        </div>
      </div>
      <div className="middle-section">
        <img src={iconSrc} alt={status} />
      </div>
      <div className="right-section">
        <Popup
          modal
          nested
          trigger={<button onClick={onDetailsClick}>Ver Detalhes</button>}
          position="right center"
        >
          <h1 className="popup-title">
            Revise as informações do quarto antes de confirmar.
          </h1>
          <div className="room-details-popup">
            <div className="room-capacity">
              <h1>Quarto 5</h1>
              <img src={roomStats} className="room-capacity-img" alt="" />
            </div>

            <div className="people-column">
              <HeaderPerson avatarPic={avatar}></HeaderPerson>
              <HeaderPerson avatarPic={avatar}></HeaderPerson>
              <HeaderPerson avatarPic={avatar}></HeaderPerson>
              <HeaderPerson avatarPic={avatar}></HeaderPerson>
            </div>
          </div>
          <div className="popup-buttons">
            <Button onClick={successPage} insideText={"Confirmar"} className={"margin-top"}></Button>
            <div className="margin-left"></div>
            <Button onClick={ShowRooms} insideText={"Voltar"} className={"margin-top"}></Button>
          </div>
        </Popup>
      </div>
    </div>
  );
}
