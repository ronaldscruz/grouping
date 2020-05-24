import React, { useState } from "react";
import "./styles.css";

import { useHistory } from "react-router-dom";

import UnauthenticatedTopBar from "../../components/UnauthenticatedTopBar";
import Button from "../../components/Button";

import StepIndicator from "./StepIndicator";
import UserRegister from "./UserRegister";
import UserInterests from "./UserInterests";
import TermsAndConditions from "./TermsAndConditions";

function SignUp() {
  const history = useHistory();
  const [step, setStep] = useState(1);

  function currentStepComponent() {
    switch (step) {
      case 1:
        return UserRegister();
      case 2:
        return UserInterests();
      case 3:
        return TermsAndConditions();
      default:
        return UserRegister();
    }
  }

  function createControlButtons() {
    const btnNext = () => (
      <Button
        type="button"
        label="Próximo"
        onPress={() => setStep(step + 1)}
        rounded
      />
    );

    const btnReturn = () => (
      <Button
        type="button"
        label="Anterior"
        onPress={() => setStep(step - 1)}
        rounded
      />
    );

    const btnEnd = () => (
      <Button
        type="button"
        label="Concordar e continuar"
        onPress={() => history.push("/dashboard")}
        rounded
      />
    );

    if (step === 1) {
      return (
        <>
          <div></div> {btnNext()}
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <div></div> {btnEnd()}
        </>
      );
    } else {
      return (
        <>
          {btnReturn()} {btnNext()}
        </>
      );
    }
  }

  return (
    <div className="sign-up">
      <UnauthenticatedTopBar inRegister={true} />
      <StepIndicator current={step} max={3} />
      <div className="form-limiter">
        {currentStepComponent()}
        <div className="steps-control-wrapper">{createControlButtons()}</div>
      </div>
    </div>
  );
}

export default SignUp;
