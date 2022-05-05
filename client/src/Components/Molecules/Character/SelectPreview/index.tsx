import ModalCharacter from "@Molecules/SelectMode/ModalCharacter";
import { SelectPreviewBg, SelectPreviewContainer, SelectPreviewFloor } from "./styles";

const SelectPreview = ({ renderCharacter }: { renderCharacter: string }) => {
  console.log(renderCharacter);
  return (
    <SelectPreviewContainer>
      {/* <ModalCharacter src={renderCharacter} /> */}
      <SelectPreviewBg src="/asset/Character/bg.png" alt="highlight" />
      <ModalCharacter src="/asset/StartModal/Guest1.fbx" />
      <SelectPreviewFloor src="/asset/Character/floor.png" alt="바닥" />
    </SelectPreviewContainer>
  );
};

export default SelectPreview;
