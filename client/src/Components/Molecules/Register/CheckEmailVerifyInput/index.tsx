/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { codeType } from "@Organisms/Register/CheckVerify/useCheckVerify";
import { VerifyInput, VerifyInputContainer } from "./styles";

const CheckEmailVerifyInput = ({ code, handleCode, inputRefs }: CheckEmailVerifyInputType) => {
  return (
    <VerifyInputContainer>
      {INPUT_ARR.map((item, idx) => (
        <VerifyInput ref={(el) => ((inputRefs.current as HTMLInputElement[])[idx] = el as HTMLInputElement)} onChange={handleCode(idx)} value={code[CHANGE_IDX[idx]]} />
      ))}
    </VerifyInputContainer>
  );
};

export default CheckEmailVerifyInput;

export interface CheckEmailVerifyInputType {
  code: codeType;
  handleCode: (id: number) => ({ target }: { target: any }) => void;
  inputRefs: React.MutableRefObject<HTMLInputElement[] | null>;
}

const INPUT_ARR = [1, 1, 1, 1, 1, 1];

export const CHANGE_IDX: CHANGE_IDX_TYPE = {
  0: "one",
  1: "two",
  2: "three",
  3: "four",
  4: "five",
  5: "six",
};

export interface CHANGE_IDX_TYPE {
  [index: number]: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}
