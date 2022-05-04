import { RegisterTitle } from "@Organisms/Register/Email/styles";
import React from "react";
import { CheckEmailVerifyDescription, CheckEmailVerifyImpact } from "./styles";

const CheckEmailVerifyText = ({ handleCheck }: { handleCheck: () => void }) => {
  return (
    <>
      <RegisterTitle>2FA코드를 입력해주세요</RegisterTitle>
      <CheckEmailVerifyDescription>아주메일로 2FA코드가 전송되었습니다</CheckEmailVerifyDescription>
      <CheckEmailVerifyImpact onClick={handleCheck}>메일을 받지 못하셨나요?</CheckEmailVerifyImpact>
    </>
  );
};

export default React.memo(CheckEmailVerifyText);
