import RegisterInputComponent from "@Molecules/Register/RegisterInputComponent";
import { RegisterInputFormContainer, Br, RegisterDescript, RegisterButtonContainer, RegisterNextButton } from "./styles";

import useEmail from "./useEmail";

const RegisterInputForm = ({ handleCheck }: { handleCheck: () => void }) => {
  const { email, next, handleEmailChange, handleMoveNext }: useEmailType = useEmail({ handleCheck });
  return (
    <RegisterInputFormContainer>
      <RegisterInputComponent handleEmailChange={handleEmailChange} email={email} />
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

interface useEmailType {
  email: string;
  next: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMoveNext: () => void;
}
