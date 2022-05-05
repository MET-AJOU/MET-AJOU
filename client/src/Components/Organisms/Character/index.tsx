import SelectCharacter from "@Molecules/Character/SelectCharacter";
import SelectEquip from "@Molecules/Character/SelectEquip";
import SelectPreview from "@Molecules/Character/SelectPreview";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";
import { checkSrc } from "@Organisms/Register/Email";
import { CharacterFormContainer, CharacterFormTitle, CharacterSelectContainer } from "./styles";
import useSelectCharacter from "./useSelectCharacter";

const CharacterForm = () => {
  const { select, handleSelect, hairColor, handleHairColor, costumeColor, handleCostumeColor, costumeSelect, handleCostumeSelect, renderCharacter } = useSelectCharacter();
  const handleMoveNext = () => console.log("1");
  return (
    <CharacterFormContainer>
      <CharacterFormTitle>원하는 캐릭터를 만들어보세요</CharacterFormTitle>
      <CharacterSelectContainer>
        <SelectCharacter select={select} handleSelect={handleSelect} />
        <SelectPreview renderCharacter={renderCharacter} />
        <SelectEquip hairColor={hairColor} handleHairColor={handleHairColor} costumeColor={costumeColor} handleCostumeColor={handleCostumeColor} costumeSelect={costumeSelect} handleCostumeSelect={handleCostumeSelect} />
      </CharacterSelectContainer>
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(" ")} />
    </CharacterFormContainer>
  );
};

export default CharacterForm;
