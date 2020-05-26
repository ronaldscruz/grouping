import React from "react";
import "./styles.css";

function SquareButton({ innerIcon, innerImg, onPress, mr }) {
  if (innerIcon && innerImg) return;

  mr = mr ? "__mr" : "";

  if (innerIcon)
    return (
      <button className={`square-button ${mr}`} onClick={onPress}>
        {innerIcon()}
      </button>
    );

  if (innerImg)
    return (
      <img
        src={innerImg}
        alt="Foto de perfil de usuário"
        className={`square-button-img ${mr}`}
      />
    );
}

export default SquareButton;
