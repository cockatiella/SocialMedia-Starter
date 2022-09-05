import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.js/ProfileModal";
import { Link } from "react-router-dom";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>In a relationship💗</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>Duisburg, Germany 🇩🇪</span>
      </div>

      <div className="info">
        <span>
          <b>Works @</b>
        </span>
        <span>DCI👾</span>
      </div>

      <Link to='/login'>
         <button className="button logout-button">Log out</button>
      </Link>
    </div>
  );
}
