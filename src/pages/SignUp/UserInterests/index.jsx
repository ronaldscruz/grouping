import React from "react";
import "./styles.css";

import Input from "../../../components/Input";
import SubjectTabs from "../../../components/SubjectTabs";

function UserInterests() {
  return (
    <div className="form-signup-wrapper">
      <span className="user-interests-description">
        Selecione alguns tópicos que descrevam seus interesses
      </span>
      <p className="user-interests-explanation">
        Seja específico! Isso vai nos ajudar a te direcionar aos melhores
        conteúdos e às pessoas certas. Você pode selecionar até 5 tópicos
      </p>
      <form className="user-interests-form">
        <Input type="text" name="user-topics" placeholder="Procurar tópicos" />
        <SubjectTabs />
      </form>
    </div>
  );
}

export default UserInterests;
