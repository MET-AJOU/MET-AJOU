/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useBox } from "@react-three/cannon";

const Character = () => {
  const [ref, api] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 10,
    type: "Dynamic",
    args: [0.1, 0.1, 0.1],
  }));
  const [myPosition, setMyPosition] = useState({ x: -4, y: 2, z: 5 });
  const [director, setDirector] = useState({ dx: 0, dy: 0, dz: 0 });

  // position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
  const { x, y, z } = myPosition;
  const { dx, dy, dz } = director;
  // dx,dy 는 라디안. dx는 z축 dy는 평면
  // dx : xy 평면 , dy : xz 평면 , dz: yz평면

  const { camera } = useThree();
  const { rotation } = camera;

  // 언덕오르면 myposition y값 계산 해줘야할듯
  // rotation y: 좌우 움직임 radian

  const getDxDy = (dyRadian: number, dxRadian: number) => [Math.cos(dxRadian) * Math.cos(dyRadian), Math.cos(dxRadian) * Math.sin(dyRadian), Math.sin(dxRadian)];

  const moveLeft = () =>
    setMyPosition((position) => {
      const [_x, _z, _y] = getDxDy(rotation.y, rotation.x);
      return { ...position, x: position.x - 0.1 * _x, z: position.z + 0.1 * _z, y: position.y + 0.1 * _y };
    });

  // };
  const moveRight = () =>
    setMyPosition((position) => {
      const [_x, _z, _y] = getDxDy(rotation.y, rotation.x);
      return { ...position, x: position.x + 0.1 * _x, z: position.z - 0.1 * _z, y: position.y + 0.1 * _y };
    });
  const moveUp = () =>
    setMyPosition((position) => {
      const [_x, _z, _y] = getDxDy(rotation.y, rotation.x);
      return { ...position, x: position.x - 0.1 * _z, z: position.z - 0.1 * _x, y: position.y + 0.1 * _y };
    });

  const moveDown = () =>
    setMyPosition((position) => {
      const [_x, _z, _y] = getDxDy(rotation.y, rotation.x);
      return { ...position, x: position.x + 0.1 * _z, z: position.z + 0.1 * _x, y: position.y + 0.1 * _y };
    });

  // 이건 myposition x,y,z에 따라 바뀌어야할듯

  const moveDirectorLeft = () =>
    setDirector((position) => {
      const temp = position.dy + 0.05;
      const nextValue = temp > 6.29 ? 0 : temp;
      return { ...position, dy: nextValue };
    });
  // const moveDirectorLeft = () => rotateOnAxis(new THREE.Vector3(1, 0, 0), 0.05);

  // const moveDirectorLeft = () => camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), 5);

  const moveDirectorRight = () =>
    setDirector((position) => {
      const temp = position.dy - 0.05;
      const nextValue = temp < -6.29 ? 0 : temp;
      return { ...position, dy: nextValue };
    });
  const moveDirectorUp = () =>
    setDirector((position) => {
      const temp = position.dx + 0.05;
      const nextValue = temp > 6.29 ? 0 : temp;
      return { ...position, dx: nextValue };
    });

  const moveDirectorDown = () =>
    setDirector((position) => {
      const temp = position.dx - 0.05;
      const nextValue = temp < -6.29 ? 0 : temp;
      return { ...position, dx: nextValue };
    });

  function characterMove(event: KeyboardEvent) {
    const { keyCode: key } = event;

    if (key === 87) moveUp();
    if (key === 65) moveLeft();
    if (key === 68) moveRight();
    if (key === 83) moveDown();

    if (key === 37) moveDirectorLeft();
    if (key === 38) moveDirectorUp();
    if (key === 39) moveDirectorRight();
    if (key === 40) moveDirectorDown();
  }

  useEffect(() => {
    document.addEventListener("keydown", characterMove);
    return () => {
      document.removeEventListener("keydown", characterMove);
    };
  }, []);

  // useEffect(() => {
  //   const controls = new OrbitControls(camera, gl.domElement);
  //   controls.maxDistance = 1000000;
  //   controls.minDistance = 1;
  //   console.log(controls);
  // }, [camera, gl]);

  useFrame((state) => {
    // state.camera.position.x = x;
    // state.camera.position.y = y;
    // state.camera.position.z = z;
    // lerp 사용하면 자연스럽게 이동함
    state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.1);
    // eslint-disable-next-line no-loss-of-precision

    // console.log(ref.current!.position);
    state.camera.rotation.x = dx;
    state.camera.rotation.y = dy;
    state.camera.rotation.z = dz;
  });

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Character;
