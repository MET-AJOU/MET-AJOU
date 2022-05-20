/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

import { CheckBoxContainer, PrivacyCheckBox, PrivacyDescription, PrivacyDescriptionImpact } from "./styles";

const PrivacyCheckBoxs = ({ inputRefs }: PrivacyCheckBoxsType) => {
  // const PrivacyCheckBoxs = ({ inputRefs, handleChecked }: PrivacyCheckBoxsType) => {
  return (
    <>
      <CheckBoxContainer>
        <div>
          <PrivacyCheckBox type="checkbox" ref={(el) => ((inputRefs.current as HTMLInputElement[])[0] = el as HTMLInputElement)} />
          {/* <PrivacyCheckBox type="checkbox" ref={(el) => ((inputRefs.current as HTMLInputElement[])[0] = el as HTMLInputElement)} onChange={handleChecked(0)} /> */}
        </div>
        <PrivacyDescription>
          <PrivacyDescriptionImpact>개인정보 수집 및 이용 약관</PrivacyDescriptionImpact>을 확인하였으며 위 내용에 동의합니다.
        </PrivacyDescription>
      </CheckBoxContainer>

      <CheckBoxContainer>
        <div>
          <PrivacyCheckBox type="checkbox" ref={(el) => ((inputRefs.current as HTMLInputElement[])[1] = el as HTMLInputElement)} />
        </div>
        <PrivacyDescription>만 18세 이상입니다.</PrivacyDescription>
      </CheckBoxContainer>
    </>
  );
};

export default PrivacyCheckBoxs;

export interface PrivacyCheckBoxsType {
  inputRefs: React.MutableRefObject<HTMLInputElement[] | null>;
  // handleChecked: (idx: number) => () => void;
}
