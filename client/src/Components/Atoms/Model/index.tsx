import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Model = (props: any) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/char.glb");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"]?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHead7} />
        <skinnedMesh material={materials[``]} geometry={(nodes.mesh_0 as any).geometry} skeleton={(nodes.mesh_0 as any).skeleton} />
      </group>
    </group>
  );
};

useGLTF.preload("/models/char.glb");

export default Model;
