import React from "react";
import "./styles.css";

import groupImg from "../../../assets/group.png";

import { Group } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function GroupCard({ id, title, members = 13, limit = 25 }) {
  const history = useHistory();

  const redirectToGroupPage = () => {
    history.push(`/groups/${id}`);
  };

  return (
    <div className="group-card">
      <img
        src={groupImg}
        alt="Bússola sobre um mapa"
        className="group-img"
        width="350"
        onClick={redirectToGroupPage}
      />
      <div className="group-info">
        <span className="group-card-name" onClick={redirectToGroupPage}>
          {title}
        </span>
        <div className="members-quantity">
          <span className="quantity-title">
            <Group className="__mr __smaller" /> Participantes: {members}/
            {limit}
          </span>
          <div className="members-to-limit">
            <div className="current-members"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
