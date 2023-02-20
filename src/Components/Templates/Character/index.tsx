import CharacterForm from "@Organisms/Character";
import LoginContainer from "@Organisms/Login/LoginContainer";

const CharacterTemplate = ({ type }: { type: string }) => {
  return (
    <LoginContainer>
      <CharacterForm type={type} />
    </LoginContainer>
  );
};

export default CharacterTemplate;
