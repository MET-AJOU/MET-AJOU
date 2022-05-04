import { RegisterButtonContainer, RegisterNextButton } from "@Organisms/Register/Email/styles";
import React from "react";

const RegisterNextButtonComponent = ({ handleMoveNext, src }: RegisterNextButtonType) => {
  return (
    <RegisterButtonContainer>
      <RegisterNextButton onClick={handleMoveNext} src={src} alt="next" />
    </RegisterButtonContainer>
  );
};

export default React.memo(RegisterNextButtonComponent);

interface RegisterNextButtonType {
  handleMoveNext: () => void;
  src: string;
}
