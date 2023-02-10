import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ModalCharacterContainer } from "./style";
import ModalCharacterItem from "./Item";

const ModalCharacter = ({ src }: { src: string }) => {
  return (
    <ModalCharacterContainer>
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <ModalCharacterItem src={src} />
        </Suspense>
      </Canvas>
    </ModalCharacterContainer>
  );
};

export default ModalCharacter;
