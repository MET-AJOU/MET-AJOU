import { useFBX } from "@react-three/drei";

const FBXs = ({ src }: { src: string }) => {
  const temp = useFBX(src);

  return (
    <group>
      <primitive object={temp} />
    </group>
  );
};

export default FBXs;
