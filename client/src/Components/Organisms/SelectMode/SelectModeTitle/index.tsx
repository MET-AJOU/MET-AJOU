import ModalDescription from "@Atoms/LoginRegister/Description";
import ModalLogo from "@Atoms/LoginRegister/Logo";
import ModalTitle from "@Atoms/LoginRegister/Title";
import { SelectModeTitleContainer } from "./styles";

const SelectModeTitle = ({ src, title, description }: { src: string; title: string; description: string }) => {
  return (
    <>
      <SelectModeTitleContainer>
        <ModalLogo src={src} />
      </SelectModeTitleContainer>
      <ModalTitle title={title} />
      <ModalDescription description={description} />
    </>
  );
};

export default SelectModeTitle;
