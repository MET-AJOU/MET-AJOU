/* eslint-disable @typescript-eslint/no-unused-vars */
import { GET_VERIFY_EMAIL, CHECK_VERIFY_EMAIL } from "@Constant/URL";
import LoginContainer from "@Organisms/Login/LoginContainer";
import { FooterContainer } from "@Organisms/Login/LoginContainer/styles";
import useLineMove from "@Organisms/Login/LoginContainer/useLineMove";
import CheckEmailVerify from "@Organisms/Register/CheckVerify";
import RegisterInputForm from "@Organisms/Register/Email";
import axios from "axios";
import { useRef } from "react";
import useCheck, { useCheckType } from "./useCheck";

const RegisterTemplate = () => {
  const { check, handleCheck }: useCheckType = useCheck();
  const verifyRef = useRef<HTMLInputElement>(null);

  const handleCheckVerify = async () => {
    if (!verifyRef.current) return;

    const res = await axios.post(
      CHECK_VERIFY_EMAIL,
      {
        VerifyToken: verifyRef.current.value,
      },
      {
        withCredentials: true,
      }
    );

    console.log(res);
  };
  return <LoginContainer>{check ? <CheckEmailVerify /> : <RegisterInputForm handleCheck={handleCheck} />}</LoginContainer>;
};
export default RegisterTemplate;
