import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ModalCharacterContainer } from "./style";
import ModalCharacterItem from "./Item";

const ModalCharacter = ({ src }: { src: string }) => {
  const handlePreventClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <ModalCharacterContainer onClick={handlePreventClick}>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <ModalCharacterItem src={src} />
      </Canvas>
    </ModalCharacterContainer>
  );
};

export default ModalCharacter;
