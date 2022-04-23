/* eslint-disable react/void-dom-elements-no-children */
import { Br, RegisterButtonContainer, RegisterDescript, RegisterInput, RegisterInputContainer, RegisterInputFormContainer, RegisterNextButton, RegisterTitle } from "@Organisms/Register/styles";
import useEmail from "./useEmail";

const RegisterInputForm = () => {
  const [email, next, handleEmailChange, handleMoveNext] = useEmail();
  return (
    <RegisterInputFormContainer>
      <RegisterTitle>사용자님의 아주 메일을 입력해주세요</RegisterTitle>
      <RegisterInputContainer>
        <RegisterInput placeholder="address" onChange={handleEmailChange} value={email} type="text" />
        <span>@ajou.ac.kr</span>
      </RegisterInputContainer>
      {next && <Br />}
      {!next && <RegisterDescript>이메일 주소를 입력해주세요</RegisterDescript>}
      <RegisterButtonContainer>
        <RegisterNextButton onClick={handleMoveNext} src={checkSrc(email)} alt="next" />
      </RegisterButtonContainer>
    </RegisterInputFormContainer>
  );
};

export default RegisterInputForm;

const checkSrc = (email: string) => (email.length > 0 ? "/asset/Register/SelectButton.png" : "/asset/Register/unSelectButton.svg");
