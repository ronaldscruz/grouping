import React from "react";
import "./styles.css";

function DashboardGreeting() {
  return (
    <div className="dashboard-greeting">
      <span className="greet-by-name">Hey, Ronald!</span>
      <span className="how-to-explore">
        Crie ou explore um artigo e uma trilha
      </span>
    </div>
  );
}

export default DashboardGreeting;
