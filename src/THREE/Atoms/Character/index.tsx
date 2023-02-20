/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useFBX } from "@react-three/drei";
import { useSphere } from "@react-three/cannon";
import useGetAnimations from "@Hook/Three/useGetAnimations";
import { animationSrcs } from "@Constant/Three";
import { CharacterType, PositionType } from "@Type/Three";
import { useEffect } from "react";

const Character = ({ src, characterState, characterRefs, actions, apis, idx, myPosition, myUserIdx }: { src: string; characterState: CharacterType; characterRefs: any; idx: number; actions: any; apis: any; myPosition: React.MutableRefObject<PositionType>; myUserIdx: number }) => {
  if (!characterState) return null;

  const {
    position: { x, y, z },
  } = characterState;

  const temp = useFBX(src);

  const [ref, api] = useSphere(() => ({
    mass: 100,
    args: [0.05],
    position: [x, y, z],
    type: "Dynamic",
  }));

  actions.current[idx] = useGetAnimations({ animationSrcs, ref });
  characterRefs.current[idx] = ref;
  apis.current[idx] = api;

  useEffect(() => {
    if (myUserIdx !== idx) return;
    api.position.subscribe(([posX, posY, posZ]) => (myPosition.current = { x: posX, y: posY, z: posZ }));
  }, []);

  return (
    <group ref={ref} scale={0.0015}>
      <primitive object={temp} />
    </group>
  );
};

export default Character;
