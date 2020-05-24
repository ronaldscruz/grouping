import React from "react";
import "./styles.css";

function Button({
  label,
  onPress = () => {},
  hasBg = true,
  hasGradient = false,
  rounded = false,
  bold = false,
}) {
  hasBg = `${hasBg ? "__has-bg" : ""}`;
  hasGradient = `${hasGradient ? "__has-gradient" : ""}`;
  rounded = `${rounded ? "__rounded" : ""}`;
  bold = `${bold ? "__bold" : ""}`;

  return (
    <button
      type="button"
      className={`colored-button ${hasBg} ${hasGradient} ${rounded} ${bold}`}
      onClick={onPress}
    >
      {label}
    </button>
  );
}

export default Button;
