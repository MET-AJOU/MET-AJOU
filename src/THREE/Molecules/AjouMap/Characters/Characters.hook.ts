/* eslint-disable no-nested-ternary */
import { useThree, useFrame } from "@react-three/fiber";
import { myPositionAtom, myUserIdAtom } from "@Recoils/Characters";
import { initAnimation } from "@Util/animation";
import { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import type { UseCharacterMovementProps } from "./Characters.type";
import { getDirections, isCharacterLoaded, setCameraPosition, syncPositionWithServer } from "./Characters.util";

const useCharacterMovement = ({ apis, characterRefs, actions, characters }: UseCharacterMovementProps) => {
  const myUserId = useRecoilValue(myUserIdAtom);
  const myUserIdx = characters?.findIndex(({ userId }) => userId === myUserId);
  const userKeyStates = characters?.map(({ keyState: { forward, backward, left, right, boost, space, hello, dance, happy, question, lose } }) => ({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose })) ?? [];
  const userPositions = characters?.map(({ position }) => ({ position }));
  const setMyPosition = useSetRecoilState(myPositionAtom);
  const time = useRef<number>(0);
  const { camera } = useThree();
  let isSafe = false;
  if (isCharacterLoaded(characterRefs, apis)) isSafe = true;

  useFrame((state, delta) => {
    if (isSafe) {
      userKeyStates?.forEach(({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose }, idx) => {
        const { moveDirection, upwardSpeed, characterDirection } = getDirections({ forward, left, right, backward, space, boost, hello, dance, happy, question, lose, camera });
        initAnimation({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose, actions: actions.current[idx] });

        if (!apis.current[idx]) return;
        apis.current[idx].velocity.set(moveDirection.x, upwardSpeed, moveDirection.z);
        apis.current[idx].rotation.set(0, characterDirection, 0);
      });

      setCameraPosition({ characterRefs, myUserIdx, setMyPosition, camera });
      syncPositionWithServer({ time, userPositions, apis, delta });
    }
  });
};
export default useCharacterMovement;
