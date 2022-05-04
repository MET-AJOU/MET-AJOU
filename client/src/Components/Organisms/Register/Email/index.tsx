import RegisterInputComponent from "@Molecules/Register/RegisterInputComponent";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { RegisterInputFormContainer, Br, RegisterDescript } from "./styles";

import useEmail from "./useEmail";

const RegisterInputForm = ({ handleCheck }: { handleCheck: () => void }) => {
  const { email, next, handleEmailChange, handleMoveNext }: useEmailType = useEmail({ handleCheck });
  return (
    <RegisterInputFormContainer>
      <RegisterInputComponent handleEmailChange={handleEmailChange} email={email} />
      {next && <Br />}
      {!next && <RegisterDescript>이메일 주소를 입력해주세요</RegisterDescript>}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(email)} />
    </RegisterInputFormContainer>
  );
};

export default RegisterInputForm;

export const checkSrc = (data: string) => (data.length > 0 ? "/asset/Register/SelectButton.png" : "/asset/Register/unSelectButton.svg");

interface useEmailType {
  email: string;
  next: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMoveNext: () => void;
}
