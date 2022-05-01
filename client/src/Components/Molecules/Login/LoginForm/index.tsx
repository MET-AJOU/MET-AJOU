/* eslint-disable no-return-assign */
import { GOOGLE_URL } from "@Constant/URL";
import LoginButton from "@Atoms/LoginRegister/Login/LoginButton";
import { LoginFormContainer } from "./styles";

const LoginForm = () => {
  const handleLoginClick = () => (window.location.href = GOOGLE_URL);
  return (
    <LoginFormContainer>
      <LoginButton fn={undefined} title="KaKao로 로그인" />
      <LoginButton fn={handleLoginClick} title="Google로 로그인" />
    </LoginFormContainer>
  );
};

export default LoginForm;

export const GOOGLE_LOGIN = "Google로 로그인";
export const KAKAO_LOGIN = "KaKao로 로그인";
