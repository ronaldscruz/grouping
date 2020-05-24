import React from "react";
import "./styles.css";

function StepIndicator({ current, max }) {
  return (
    <div className="signup-indicator">
      <div className="signup-progress-bar">
        <div className={`current-progress __step-${current}`}></div>
      </div>
      <span className="text-step-indicator">
        PASSO {current} DE {max}
      </span>
    </div>
  );
}

export default StepIndicator;
