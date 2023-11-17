import React, { useState } from "react";
import SubtitlePic from "./assets/subtitle-occupied-free.svg";
import RoomCard from "./components/room-card/roomCard";
import Header from "./components/header/header";

import avatar from "./assets/Avatar.svg";
import encejLogo from "./assets/Logo-Encej.svg";

import "./showRooms.css";

function ShowRooms() {
  const [selectedCapacity, setSelectedCapacity] = useState<number | null>(null);

  const handleCapacitySelection = (capacity: number) => {
    setSelectedCapacity(capacity);
  };
  return (
    <section className="show-rooms-container">
      <Header avatarPic={avatar} encejLogo={encejLogo}></Header>
      <hr className="line" />
      <img src={SubtitlePic} alt="legenda" className="room-image" />
      <h1>Selecione a capacidade do quarto:</h1>
      <div className="capacity-selection">
        <div
          className={`capacity-option ${
            selectedCapacity === 4 ? "selected" : ""
          }`}
          onClick={() => handleCapacitySelection(4)}
        >
          4 lugares
        </div>
        <div
          className={`capacity-option ${
            selectedCapacity === 6 ? "selected" : ""
          }`}
          onClick={() => handleCapacitySelection(6)}
        >
          6 lugares
        </div>
        <div
          className={`capacity-option ${
            selectedCapacity === 10 ? "selected" : ""
          }`}
          onClick={() => handleCapacitySelection(10)}
        >
          10 lugares
        </div>
      </div>
      <div className="room-cards-container">
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="lotado"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={ShowRooms}
        ></RoomCard>
        <RoomCard
          roomName="Quarto 1"
          status="disponivel"
          onDetailsClick={ShowRooms}
        ></RoomCard>
      </div>
    </section>
  );
}

export default ShowRooms;
