import { Canvas } from "@react-three/fiber";
import { ModalCharacterContainer } from "./style";
import ModalCharacterItem from "./Item";

const ModalCharacter = ({ src }: { src: string }) => {
  return (
    <ModalCharacterContainer>
      <Canvas>
        <ambientLight />
        <ModalCharacterItem src={src} />
      </Canvas>
    </ModalCharacterContainer>
  );
};

export default ModalCharacter;
