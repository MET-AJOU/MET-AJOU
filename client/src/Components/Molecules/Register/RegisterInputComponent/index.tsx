import { RegisterTitle, RegisterInputContainer, RegisterInput } from "@Organisms/Register/Email/styles";
import React from "react";

const RegisterInputComponent = ({ handleEmailChange, email }: RegisterInputType) => {
  return (
    <>
      <RegisterTitle>사용자님의 아주 메일을 입력해주세요</RegisterTitle>
      <RegisterInputContainer>
        <RegisterInput placeholder="address" onChange={handleEmailChange} value={email} type="text" />
        <span>@ajou.ac.kr</span>
      </RegisterInputContainer>
    </>
  );
};

export default React.memo(RegisterInputComponent);

export interface RegisterInputType {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
