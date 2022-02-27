/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBox } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { positionAtom } from "@Recoils/.";
import { PositionType } from "@Type/.";
import { useEffect, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import * as THREE from "three";

const Character = (props: any) => {
  const [ref] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 10,
    type: "Dynamic",
    args: [0.1, 0.1, 0.1],
    ...props,
  }));

  const [myPosition, setMyPosition] = useRecoilState<PositionType>(positionAtom);
  const { x, y, z } = myPosition;
  // y는 좌 / 우
  // x는 상 / 하
  // z는 필요 없는거 같아서 주석처리함
  const { camera } = useThree();

  const moveLeft = () =>
    setMyPosition((position: PositionType) => {
      console.log(position);
      return { ...position, x: position.x - 0.1 };
    });

  // };
  const moveRight = () =>
    setMyPosition((position: PositionType) => {
      return { ...position, x: position.x + 0.1 };
    });
  const moveUp = () =>
    setMyPosition((position: PositionType) => {
      return { ...position, y: position.y + 0.1 };
    });

  const moveDown = () =>
    setMyPosition((position: PositionType) => {
      return { ...position, y: position.y + 0.1 };
    });

  function characterMove(event: KeyboardEvent) {
    const { keyCode: key } = event;
    console.log(myPosition);
    if (key === 87) moveUp();
    if (key === 65) moveLeft();
    if (key === 68) moveRight();
    if (key === 83) moveDown();
  }

  useLayoutEffect(() => {
    camera.position.set(0, 10, 10);
    camera.lookAt(ref.current!.position);
  }, [camera]);

  useEffect(() => {
    document.addEventListener("keydown", characterMove);
    return () => {
      document.removeEventListener("keydown", characterMove);
    };
  }, [myPosition]);

  useFrame(() => {});

  // eslint-disable-next-line react/destructuring-assignment
  return (
    <mesh castShadow ref={ref}>
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="ref" />
    </mesh>
  );
};

export default Character;
