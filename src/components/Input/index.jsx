import React from "react";
import "./styles.css";

function Input({ type, value, change, placeholder, name }) {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        className="input-component"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={change ? (e) => change(e) : () => {}}
      />
    </div>
  );
}

export default Input;
