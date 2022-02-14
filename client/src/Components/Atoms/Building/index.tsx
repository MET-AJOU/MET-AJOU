import { useGLTF } from "@react-three/drei";

interface Props {
    src: string;
}
const Building = ({ src }: Props) => {
    const { nodes, materials } = useGLTF(src);
    return <mesh castShadow receiveShadow geometry={(nodes.pCube1 as any).geometry} material={(nodes.pCube1 as any).material} />;
};

export default Building;
