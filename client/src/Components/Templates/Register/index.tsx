import LoginContainer from "@Organisms/Login/LoginContainer";
import CheckEmailVerify from "@Organisms/Register/CheckVerify";
import RegisterInputForm from "@Organisms/Register/Email";
import useCheck, { useCheckType } from "./useCheck";

const RegisterTemplate = () => {
  const { check, handleCheck }: useCheckType = useCheck();
  return <LoginContainer>{check ? <CheckEmailVerify handleCheck={handleCheck} /> : <RegisterInputForm handleCheck={handleCheck} />}</LoginContainer>;
};
export default RegisterTemplate;
