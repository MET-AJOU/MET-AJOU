import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

import { useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF("./models/char.glb");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["mixamo.com"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes.mixamorigHead7} />
        <skinnedMesh
          meterial={materials[``]}
          geometry={nodes.mesh_0.geometry}
          skeleton={nodes.mesh_0.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/char.glb");
