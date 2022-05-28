import { useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Vector3 } from "three";

const cache: CharacterCacheType = {};

const ModalCharacterItem = ({ src }: { src: string }) => {
  console.log(src);
  const object = cache[src] ?? useFBX(src);
  cache[src] = object;
  const { camera } = useThree();
  const cameraPosition = new Vector3();
  cameraPosition.set(0, 3.5, 5);
  useFrame((_, delta) => {
    camera.position.lerp(cameraPosition, delta);
  });

  return <primitive object={object} scale={0.055} />;
};

export default ModalCharacterItem;

interface CharacterCacheType {
  [index: string]: Group;
}
