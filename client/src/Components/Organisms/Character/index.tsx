import { MyPageSelectButton } from "@Atoms/MapOption/Modal/MyPage/styles";
import SelectCharacter from "@Molecules/Character/SelectCharacter";
import SelectEquip from "@Molecules/Character/SelectEquip";
import SelectPreview from "@Molecules/Character/SelectPreview";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { checkSrc } from "@Organisms/Register/Email";
// import { useNavigate } from "react-router-dom";
import { CharacterFormContainer, CharacterFormTitle, CharacterSelectContainer, SelectPreviewContainer } from "./styles";
import useSelectCharacter from "./useSelectCharacter";

const CharacterForm = ({ type }: { type: string }) => {
  const { select, handleSelect, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect, renderCharacter, handleMoveNext } = useSelectCharacter();
  return (
    <CharacterFormContainer>
      <CharacterFormTitle>원하는 캐릭터를 만들어보세요</CharacterFormTitle>
      <CharacterSelectContainer>
        <SelectCharacter select={select} handleSelect={handleSelect} />
        <SelectPreviewContainer>
          <SelectPreview renderCharacter={renderCharacter} />
        </SelectPreviewContainer>
        <SelectEquip hairColor={hairColor} handleHairColor={handleHairColor} costumeColor={costumeColor} handleCostumeColor={handleCostumeColor} costumeSelect={costumeSelect} handleCostumeSelect={handleCostumeSelect} />
      </CharacterSelectContainer>
      {type === NEW && <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(" ")} />}
      {type === UPDATE && <MyPageSelectButton>저장</MyPageSelectButton>}
    </CharacterFormContainer>
  );
};

export default CharacterForm;

export const NEW = "NEW";
export const UPDATE = "UPDATE";
