import "./roomCard.css";
import fullRoom from "../../assets/full-room.svg";
import availableRoom from "../../assets/available-room.svg";
import emptyRoom from "../../assets/empty-room.svg";

interface RoomCardProps {
  roomName: string;
  status: "lotado" | "disponivel" | "vazio";
  onDetailsClick: () => void;
}

export default function Header({
  roomName,
  status,
  onDetailsClick,
}: RoomCardProps) {
  const backgroundColor = status === "lotado" ? "red" : "green";

  const iconSrc =
    status === "lotado"
      ? fullRoom
      : status === "disponivel"
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
        <button onClick={onDetailsClick}>Editar</button>
        <div className="vertical-space-3-px"></div>
        <button onClick={onDetailsClick}>Excluir</button>
      </div>
    </div>
  );
}
