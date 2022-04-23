import { useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const ModalCharacterItem = ({ src }: { src: string }) => {
  const object = useFBX(src);
  const { camera } = useThree();
  const cameraPosition = new Vector3();
  cameraPosition.set(0, 2.5, 5);
  useFrame((_, delta) => {
    camera.position.lerp(cameraPosition, delta);
  });

  return <primitive object={object} scale={0.05} />;
};

export default ModalCharacterItem;
