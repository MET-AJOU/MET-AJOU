import LoginBody from "@Organisms/Login/LoginBody";
import LoginContainer from "@Organisms/Login/LoginContainer";
import SelectModeTitle from "@Organisms/SelectMode/SelectModeTitle";

const LoginTemplate = () => {
  return (
    <LoginContainer>
      <SelectModeTitle src={src} title={title} description={description} />
      <LoginBody />
    </LoginContainer>
  );
};

export default LoginTemplate;

const src = "/asset/StartModal/ModalLogo.png";
const title = "MET:AJOU에 방문해주셔서 감사합니다!";
const description = "소셜로그인을 완료해주세요";
