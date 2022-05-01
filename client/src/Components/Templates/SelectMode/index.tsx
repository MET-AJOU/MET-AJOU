import LoginContainer from "@Organisms/Login/LoginContainer";
import SelectModeContainer from "@Organisms/SelectMode/SelectModeContainer";
import SelectModeTitle from "@Organisms/SelectMode/SelectModeTitle";

const SelectModeTemplate = () => {
  return (
    <LoginContainer>
      <SelectModeTitle src={src} title={title} description={description} />
      <SelectModeContainer />
    </LoginContainer>
  );
};

export default SelectModeTemplate;

export const GUEST_TITLE = "게스트";
export const AJOU_TITLE = "아주대생";
const title = "MET:AJOU에 방문해주셔서 감사합니다!";
const src = "/asset/StartModal/ModalLogo.png";
const description = "해당되는 권한을 선택해 주세요";
