// import { useEffect, useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";

import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

// const Character = () => {
//   const character = useRef<THREE.Mesh>(null);

//   const [active, setActive] = useState(false);
//   const [myPosition, setMyPosition] = useState({ x: 0, y: 0, z: 0 });
//   const { x, y, z } = myPosition;

//   const moveLeft = () => setMyPosition((position) => ({ ...position, x: position.x - 0.1 }));
//   const moveRight = () => setMyPosition((position) => ({ ...position, x: position.x + 0.1 }));
//   const moveUp = () => setMyPosition((position) => ({ ...position, z: position.z - 0.1 }));
//   const moveDown = () => setMyPosition((position) => ({ ...position, z: position.z + 0.1 }));

//   function characterMove(event: KeyboardEvent) {
//     const { key } = event;
//     if (key === "w" || key === "W") moveUp();
//     if (key === "a" || key === "A") moveLeft();
//     if (key === "d" || key === "D") moveRight();
//     if (key === "s" || key === "S") moveDown();
//   }

//   useEffect(() => {
//     if (!character.current) return;
//     document.addEventListener("keydown", characterMove);
//     // eslint-disable-next-line consistent-return
//     return () => {
//       document.removeEventListener("keydown", characterMove);
//     };
//   }, []);

//   useFrame(() => {
//     if (!character.current) return;
//     character.current.rotation.x += 0.01;
//   });

//   return (
//     <mesh position={[x, y, z]} ref={character} scale={active ? 1.5 : 1} onClick={() => setActive(!active)}>
//       <boxGeometry args={[0.5, 0.5, 0.5]} />
//       {/* <meshStandardMaterial color={"orange"} /> */}
//       <meshStandardMaterial />
//     </mesh>
//   );
// };
const Caracter = (props: any) => {
  const [ref] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    mass: 100,
    ...props,
  }));

  return (
    <Box ref={ref}>
      <meshNormalMaterial />
    </Box>
  );
};

export default Caracter;
