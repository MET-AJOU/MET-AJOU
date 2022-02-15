import React, { useEffect, useRef, useState } from "react";
import { ThreeEvent, useFrame } from "@react-three/fiber";

const Character = () => {
    const character = useRef<THREE.Mesh>(null);

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [myPosition, setMyPosition] = useState({ x: 0, y: 0, z: 0 });
    const { x, y, z } = myPosition;

    const moveLeft = () => setMyPosition(({ x, y, z }) => ({ x: x - 0.01, y, z }));
    const moveRight = () => setMyPosition(({ x, y, z }) => ({ x: x + 0.01, y, z }));
    const moveUp = () => setMyPosition(({ x, y, z }) => ({ x, y: y, z: z - 0.01 }));
    const moveDown = () => setMyPosition(({ x, y, z }) => ({ x, y: y, z: z + 0.01 }));

    function characterMove(event: KeyboardEvent) {
        const { key } = event;
        console.log(key);
        if (key === "w" || key === "W") moveUp();
        if (key === "a" || key === "A") moveLeft();
        if (key === "d" || key === "D") moveRight();
        if (key === "s" || key === "S") moveDown();
    }

    useEffect(() => {
        if (!character.current) return;
        document.addEventListener("keydown", characterMove);
        return () => {
            document.removeEventListener("keydown", characterMove);
        };
    }, []);

    useFrame((state, delta) => {
        if (!character.current) return;
        character.current.rotation.x += 0.01;
    });

    return (
        <mesh position={[x, y, z]} ref={character} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            {/* <meshStandardMaterial color={"orange"} /> */}
            <meshStandardMaterial />
        </mesh>
    );
};

export default Character;
