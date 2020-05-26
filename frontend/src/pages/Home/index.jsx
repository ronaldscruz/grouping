import React from "react";
import "./styles.css";

import homeMockDesign from "../../assets/home-mock-design.png";

import UnauthenticatedTopBar from "../../components/UnauthenticatedTopBar";
import HomeWelcome from "./HomeWelcome";

function Home() {
  return (
    <div className="home-wrapper">
      <section className="home-section">
        <UnauthenticatedTopBar />
        <HomeWelcome />
      </section>

      {/* Home foi mockada por questão de prazo de entrega */}
      <img
        src={homeMockDesign}
        alt="Descrição do Grouping e seus planos"
        width="100%"
      />
    </div>
  );
}

export default Home;
