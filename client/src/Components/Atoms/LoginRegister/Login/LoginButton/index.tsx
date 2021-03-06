import { GOOGLE_LOGIN } from "@Molecules/Login/LoginForm";
import { LoginButtonContainer } from "./style";

const LoginButton = ({ fn, title }: { fn: (() => string) | undefined; title: string }) => {
  return (
    <LoginButtonContainer onClick={fn}>
      <img src={getSrc(title)} alt={getAlt(title)} />
      <div>{title}</div>
    </LoginButtonContainer>
  );
};

export default LoginButton;

const getSrc = (title: string) => (title === GOOGLE_LOGIN ? "/asset/Login/Form/google.png" : "/asset/Login/Form/kakao.png");
const getAlt = (title: string) => (title === GOOGLE_LOGIN ? "구글로그인" : "카카오로그인");
