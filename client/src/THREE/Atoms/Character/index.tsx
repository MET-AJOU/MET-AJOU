import { CharacterType } from "@Type/Three";
import { useGetCharacterStates } from "./Character.hook";

const TestCharacter = ({ src, characterState, setCharacterRefs, setActions, setApis, idx }: { src: string; characterState: CharacterType; setCharacterRefs: any; idx: number; setActions: any; setApis: any }) => {
  if (!characterState) return null;
  const [temp, ref] = useGetCharacterStates({ characterState, src, setCharacterRefs, setActions, setApis, idx });

  return (
    <group ref={ref} scale={0.0015}>
      <primitive object={temp} />
    </group>
  );
};

export default TestCharacter;
