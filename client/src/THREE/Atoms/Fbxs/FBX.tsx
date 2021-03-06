/* eslint-disable react/require-default-props */
import { useFBX } from "@react-three/drei";

export const FBXs = ({ src, size }: { src: string; size: number }) => {
  const temp = useFBX(src);

  return (
    <group scale={size}>
      <primitive object={temp} />
    </group>
  );
};
