import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group, Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const Fog = () => {
  const clouds = useRef<Group>(null!);
  const { nodes: n } = useGLTF("models/fog.glb") as unknown as TrackGLTF;

  return (
    <group ref={clouds}>
      <mesh geometry={n.cloud001.geometry} material={n.cloud001.material} position={[-8.55, 27.94, -7.84]} rotation={[0, 0.26, 0]} />
      <mesh geometry={n.cloud003.geometry} material={n.cloud003.material} position={[-8.55, 7.47, -7.84]} />
      <mesh geometry={n.cloud006.geometry} material={n.cloud006.material} position={[-43, 11.66, 8.15]} />
      <mesh geometry={n.cloud008.geometry} material={n.cloud008.material} position={[16.29, 8.22, -7.84]} />
      <mesh geometry={n.cloud010.geometry} material={n.cloud010.material} position={[6.63, 7.79, -7.84]} />
      <mesh geometry={n.cloud011.geometry} material={n.cloud011.material} position={[-8.55, -8.74, -7.84]} />
      <mesh geometry={n.cloud002.geometry} material={n.cloud002.material} position={[49.41, 27.94, -17.5]} rotation={[-Math.PI, 0.92, -Math.PI]} />
      <mesh geometry={n.cloud004.geometry} material={n.cloud004.material} position={[10.77, 11.73, 17]} rotation={[-Math.PI, 1.19, -Math.PI]} />
      <mesh geometry={n.cloud012.geometry} material={n.cloud012.material} position={[11.47, -16.12, -66.08]} rotation={[-Math.PI, 0.92, -Math.PI]} />
      <mesh geometry={n.cloud007.geometry} material={n.cloud007.material} position={[-8.55, 22.81, -7.84]} rotation={[Math.PI, -1.43, Math.PI]} />
      <mesh geometry={n.cloud009.geometry} material={n.cloud009.material} position={[-32.93, 17.92, -7.84]} rotation={[Math.PI, -0.79, Math.PI]} />
      <mesh geometry={n.cloud.geometry} material={n.cloud.material} position={[-66.73, -4.76, -17.35]} rotation={[Math.PI, -0.79, Math.PI]} />
      <mesh geometry={n.cloud005.geometry} material={n.cloud005.material} position={[25.95, 27.94, -23.02]} rotation={[-Math.PI, 0.31, -Math.PI]} />
    </group>
  );
};

export default Fog;

interface TrackGLTF extends GLTF {
  nodes: {
    // track_2: Mesh;
    // tube: Mesh;
    // strip: Mesh;
    // track_1: Mesh;
    // mountains: Mesh;
    // terrain: Mesh;
    // water: Mesh;
    // bird001: Mesh;
    // bird002: Mesh;
    // bird003: Mesh;
    // bird: Mesh;
    // blade001: Mesh;
    // blade002: Mesh;
    // blade003: Mesh;
    // blade004: Mesh;
    // blade005: Mesh;
    // blade006: Mesh;
    // blade: Mesh;
    cloud001: Mesh;
    cloud002: Mesh;
    cloud003: Mesh;
    cloud004: Mesh;
    cloud005: Mesh;
    cloud006: Mesh;
    cloud007: Mesh;
    cloud008: Mesh;
    cloud009: Mesh;
    cloud010: Mesh;
    cloud011: Mesh;
    cloud012: Mesh;
    cloud: Mesh;
  };
}
