import React from "react";
import "./styles.css";

import Input from "../../../components/Input";

function UserRegister() {
  return (
    <div className="form-signup-wrapper">
      <span className="user-register-description">
        Primeiro, me deixe saber seus dados básicos
      </span>
      <p className="user-register-explanation">
        Preciso te conhecer melhor, são rápidos passos para que já possa se
        conectar com pessoas e aprender muito
      </p>
      <form className="user-register-form">
        <Input type="text" name="user-name" placeholder="Nome" />
        <Input type="email" name="user-email" placeholder="Email" />
        <Input type="password" name="user-password" placeholder="Senha" />
        <Input
          type="password"
          name="retype-password"
          placeholder="Confirme sua senha"
        />
      </form>
    </div>
  );
}

export default UserRegister;
