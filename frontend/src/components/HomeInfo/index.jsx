import React from "react";
import "./styles.css";

// Assets
import studyingImg from "../../assets/studying.png";

// Components
import Button from "../Button";

function HomeInfo() {
  return (
    <div className="home-info-wrapper">
      <div className="welcome-text">
        <p className="welcome-organize">ORGANIZE SUA TRILHA DE ESTUDOS</p>
        <p className="welcome-help-you">
          Nós te ajudaremos com algumas dicas para ter a melhor experiência de
          estudo
        </p>
        <Button
          label="Experimente grátis"
          onPress={() => {}}
          hasGradient={true}
        />
      </div>
      <img className="img-studying" src={studyingImg} alt="Menina estudando" />
    </div>
  );
}

export default HomeInfo;
