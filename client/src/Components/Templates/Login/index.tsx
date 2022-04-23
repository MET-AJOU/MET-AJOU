// import LoginForm from "@Organisms/Login";
import LoginForm from "@Organisms/Login";
import LoginContainer from "@Organisms/Login/LoginContainer";
import { LoginBodyAjouLogo, LoginBodyContainer } from "./styles";

const LoginTemplate = () => {
  return (
    <LoginContainer>
      <LoginBodyContainer>
        <LoginBodyAjouLogo src="/asset/Login/AjouLogo.png" alt="아주로고" />
        <LoginForm />
      </LoginBodyContainer>
    </LoginContainer>
  );
};

export default LoginTemplate;
