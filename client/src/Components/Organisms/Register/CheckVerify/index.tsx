import CheckEmailVerifyInput, { CheckEmailVerifyInputType } from "@Molecules/Register/CheckEmailVerifyInput";
import CheckEmailVerifyText from "@Molecules/Register/CheckEmailVerifyText";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { checkSrc } from "../Email";
import { Br, RegisterDescript } from "../Email/styles";
import { CheckEmailVerifyContainer } from "./styles";
import useCheckVerify from "./useCheckVerify";
import { makeCodeToString } from "./util";

const CheckEmailVerify = ({ handleCheck }: { handleCheck: () => void }) => {
  const { code, next, inputRefs, handleMoveNext, handleCode }: useCheckVerifyType = useCheckVerify();
  return (
    <CheckEmailVerifyContainer>
      <CheckEmailVerifyText handleCheck={handleCheck} />
      <CheckEmailVerifyInput code={code} handleCode={handleCode} inputRefs={inputRefs} />
      {next && <Br />}
      {!next && <RegisterDescript>올바르지 않은 2FA코드가 입력되었습니다. 다시 입력해주세요.</RegisterDescript>}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(makeCodeToString(code))} />
    </CheckEmailVerifyContainer>
  );
};

export default CheckEmailVerify;

interface useCheckVerifyType extends CheckEmailVerifyInputType {
  next: boolean;
  handleMoveNext: () => void;
}
