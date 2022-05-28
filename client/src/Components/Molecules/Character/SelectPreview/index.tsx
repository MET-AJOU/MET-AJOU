import ModalCharacter from "@Molecules/SelectMode/ModalCharacter";
import { SelectPreviewBg, SelectPreviewContainer, SelectPreviewFloor } from "./styles";

const SelectPreview = ({ renderCharacter }: { renderCharacter: string }) => {
  return (
    <SelectPreviewContainer>
      <SelectPreviewBg src="/asset/Character/bg.png" alt="highlight" />
      <ModalCharacter src={renderCharacter} />
      <SelectPreviewFloor src="/asset/Character/floor.png" alt="바닥" />
    </SelectPreviewContainer>
  );
};

export default SelectPreview;
