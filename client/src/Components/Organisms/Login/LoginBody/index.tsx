import LoginBodyAjouLogo from "@Atoms/LoginRegister/Login/LoginBodyLogo";
import LoginForm from "@Molecules/Login/LoginForm";
import { LoginBodyContainer } from "./styles";

const LoginBody = () => {
  return (
    <LoginBodyContainer>
      <LoginBodyAjouLogo />
      <LoginForm />
    </LoginBodyContainer>
  );
};

export default LoginBody;
