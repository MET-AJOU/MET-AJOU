import PrivacyCheckBoxs, { PrivacyCheckBoxsType } from "@Molecules/Privacy/CheckBoxs";
import PrivacyTitle from "@Molecules/Privacy/Title";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { Br, RegisterDescript } from "@Organisms/Register/Email/styles";
import { PrivacyTemplateContainer } from "./styles";
import usePrivacyHook from "./usePrivacyHook";
import { checkBoxCheck, checkSrc } from "./util";

const PrivacyForm = () => {
  const { next, inputRefs, handleMoveNext, handleChecked }: usePrivacyHookType = usePrivacyHook();
  return (
    <PrivacyTemplateContainer>
      <PrivacyTitle />
      <PrivacyCheckBoxs inputRefs={inputRefs} handleChecked={handleChecked} />
      {next ? <Br /> : <RegisterDescript>서비스를 이용하기 위해서 약관에 동의해주세요</RegisterDescript>}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(checkBoxCheck(inputRefs))} />
    </PrivacyTemplateContainer>
  );
};

export default PrivacyForm;

interface usePrivacyHookType extends PrivacyCheckBoxsType {
  next: boolean;
  inputRefs: React.MutableRefObject<HTMLInputElement[]>;
  handleMoveNext: () => Promise<void>;
  handleChecked: (idx: number) => () => void;
}
