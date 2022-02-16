/* eslint-disable no-param-reassign */
import { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const Character = () => {
  const [myPosition, setMyPosition] = useState({ x: 0, y: 0, z: 0 });
  const [director, setDirector] = useState({ dx: 0, dy: 0 });
  //   const [director, setDirector] = useState({ dx: 0, dy: 0, dz: 0 });
  //   const { dx, dy, dz } = director;

  // position은 x는 좌 / 우 y는 위 / 아래 z는 깊이
  const { x, y, z } = myPosition;
  const { dx, dy } = director;

  const {
    // y는 좌 / 우
    // x는 상 / 하
    // z는 필요 없는거 같아서 주석처리함
    camera: { rotation },
  } = useThree();

  // 언덕오르면 myposition y값 계산 해줘야할듯
  const moveLeft = () => {
    console.log("rotation x : ", rotation.x);
    console.log("rotation y : ", rotation.y);
    console.log(myPosition);
    setMyPosition((position) => ({ ...position, x: position.x - 0.05 }));
  };
  const moveRight = () => setMyPosition((position) => ({ ...position, x: position.x + 0.05 }));
  const moveUp = () => setMyPosition((position) => ({ ...position, z: position.z - 0.05 }));
  const moveDown = () => setMyPosition((position) => ({ ...position, z: position.z + 0.05 }));

  // 이건 myposition x,y,z에 따라 바뀌어야할듯
  const moveDirectorLeft = () =>
    setDirector((position) => {
      const temp = position.dy + 0.05;
      const nextValue = temp > 6.29 ? 0 : temp;
      return { ...position, dy: nextValue };
    });

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

  useFrame((state) => {
    state.camera.position.x = x;
    state.camera.position.y = y;
    state.camera.position.z = z;

    state.camera.rotation.x = dx;
    state.camera.rotation.y = dy;
    // state.camera.rotation.z = dz;
  });

  return <mesh />;
};

export default Character;
