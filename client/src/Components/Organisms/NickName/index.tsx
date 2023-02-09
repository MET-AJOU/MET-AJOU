import NickNameInput, { NickNameInputType } from "@Molecules/NickName/Input";
import NickNameTitle from "@Molecules/NickName/Title";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { Br, RegisterDescript } from "@Organisms/Register/Email/styles";
import { NickNameFormContainer } from "./styles";
import useNickName from "./useNickName";

const NickNameForm = () => {
  const { next, nickName, handleMoveNext, handleNickName }: NickNameFormType = useNickName();
  return (
    <NickNameFormContainer>
      <NickNameTitle />
      <NickNameInput nickName={nickName} handleNickName={handleNickName} />
      {next ? <Br /> : <RegisterDescript>닉네임을 입력해주세요</RegisterDescript>}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(nickName)} />
    </NickNameFormContainer>
  );
};

export default NickNameForm;

const checkSrc = (data: string) => (data.length > 0 ? "/asset/Register/SelectButton.png" : "/asset/Register/unSelectButton.svg");

interface NickNameFormType extends NickNameInputType {
  next: boolean;
  handleMoveNext: () => void;
}
