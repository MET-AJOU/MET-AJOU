/* eslint-disable no-nested-ternary */
import { useThree, useFrame } from "@react-three/fiber";
import { myUserIdAtom } from "@Recoils/Characters";
import { CharacterStates } from "@Store/CharacterStates";
import { initAnimation } from "@Util/animation";
import { useRef } from "react";
import { useRecoilValue } from "recoil";

import type { UseCharacterMovementProps } from "./Characters.type";
import { getDirections, isCharacterLoaded, setCameraPosition, setMyPosition, syncPositionWithServer } from "./Characters.util";

const useCharacterMovement = ({ apis, characterRefs, actions, characters }: UseCharacterMovementProps) => {
  const myUserId = useRecoilValue(myUserIdAtom);
  const myUserIdx = characters?.findIndex(({ userId }) => userId === myUserId);
  const time = useRef<number>(0);
  const { camera } = useThree();
  let isSafe = false;
  if (isCharacterLoaded(characterRefs, apis)) isSafe = true;

  useFrame((state, delta) => {
    if (isSafe) {
      const userKeyStates = CharacterStates.instance.map(({ keyState: { forward, backward, left, right, boost, space, hello, dance, happy, question, lose } }) => ({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose })) ?? [];
      userKeyStates?.forEach(({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose }, idx) => {
        const { cameraDirection: userCameraDirection } = CharacterStates.instance[idx];
        const { moveDirection, upwardSpeed, characterDirection } = getDirections({ forward, left, right, backward, space, boost, hello, dance, happy, question, lose, userCameraDirection });
        initAnimation({ forward, backward, left, right, boost, space, hello, dance, happy, question, lose, actions: actions.current[idx] });

        if (!apis.current[idx]) return;
        apis.current[idx].velocity.set(moveDirection.x, upwardSpeed, moveDirection.z);
        apis.current[idx].rotation.set(0, characterDirection, 0);
      });

      setMyPosition({ characterRefs, myUserIdx });
      setCameraPosition({ characterRefs, myUserIdx, camera });
      syncPositionWithServer({ time, apis, delta, characterStates: CharacterStates });
    }
  });
};
export default useCharacterMovement;
