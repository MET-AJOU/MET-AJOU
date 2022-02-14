import { useGLTF } from "@react-three/drei";

const Building = (props) => {
  const { src } = props;
  const { nodes, materials } = useGLTF(src);
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.pCube1.geometry}
      material={nodes.pCube1.material}
    />
  );
};

export default Building;
