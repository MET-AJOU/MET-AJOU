/* eslint-disable @typescript-eslint/no-unused-vars */
import { CHECK_VERIFY_EMAIL } from "@Constant/URL";
import LoginContainer from "@Organisms/Login/LoginContainer";
import CheckEmailVerify from "@Organisms/Register/CheckVerify";
import RegisterInputForm from "@Organisms/Register/Email";
import axios from "axios";
import { useRef } from "react";
import useCheck, { useCheckType } from "./useCheck";

const RegisterTemplate = () => {
  const { check, handleCheck }: useCheckType = useCheck();
  return <LoginContainer>{check ? <CheckEmailVerify handleCheck={handleCheck} /> : <RegisterInputForm handleCheck={handleCheck} />}</LoginContainer>;
};
export default RegisterTemplate;
