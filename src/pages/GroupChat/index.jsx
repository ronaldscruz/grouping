import React from "react";
import "./styles.css";

import AuthenticatedTopBar from "../../components/AuthenticatedTopBar";
import Sidebar from "../../components/Sidebar";

import groupChat from "../../assets/group-chat.png";

function GroupChat() {
  return (
    <div className="groups-wrapper">
      <Sidebar />
      <div className="__consider-sidebar">
        <AuthenticatedTopBar />
        <div className="chat-demo-wrapper">
          <img src={groupChat} alt="Demonstração de chat" />
        </div>
      </div>
    </div>
  );
}

export default GroupChat;
