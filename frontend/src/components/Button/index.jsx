import React from "react";
import "./styles.css";

function Button({
  label,
  onPress = () => {},
  hasBg = true,
  hasGradient = false,
}) {
  hasBg = `${hasBg ? "__has-bg" : ""}`;
  hasGradient = `${hasGradient ? "__has-gradient" : ""}`;

  return (
    <button
      className={`colored-button ${hasBg} ${hasGradient}`}
      onClick={onPress}
    >
      {label}
    </button>
  );
}

export default Button;
