/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */
import { PublicApi } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import { keyBoardStateAtom } from "@Recoils/.";
import { keyBoardStateType } from "@Type/Three";
import { getDxDy } from "@Util/.";
import { initAnimation } from "@Util/animation";
import { useRecoilValue } from "recoil";
import { Vector3 } from "three";

const SPEED = -1;

const useCharacterMovement = ({ api, ref, actions }: { api: PublicApi; ref: any; actions: any }) => {
  const { forward, backward, left, right, boost, space, dance } = useRecoilValue<keyBoardStateType>(keyBoardStateAtom);

  const { camera } = useThree();

  const fowardVector = new Vector3();
  const sideVector = new Vector3();
  const direction = new Vector3();
  const characterPosition = new Vector3();
  const cameraPosition = new Vector3();
  const temp = new Vector3();
  let fowardSpeed = 0;
  let sideSpeed = 0;
  let upwardSpeed = 0;
  let boostSpeed = 1;
  let characterDir = 0;
  //   let upwardTime = 0;\

  useFrame((state, delta) => {
    camera.getWorldDirection(temp);

    // api.rotation.set(0, characterDir, 0);
    initAnimation({ forward, backward, left, right, boost, space, dance, actions });

    characterDir = forward || left || right ? (forward ? Math.PI : backward ? Math.PI : left ? (3 * Math.PI) / 2 : Math.PI / 2) : 0;
    fowardSpeed = forward || backward ? (forward && !backward ? 1 : -1) : 0;
    fowardVector.set(0, 0, fowardSpeed);
    sideSpeed = left || right ? (right ? 1 : -1) : 0;
    sideVector.set(sideSpeed, 0, 0);
    upwardSpeed = space ? 3 : -1;

    boostSpeed = boost ? 2 : 1;
    direction
      .subVectors(fowardVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED * boostSpeed);
    api.velocity.set(direction.x, upwardSpeed, direction.z);

    api.rotation.set(0, characterDir, 0);
    // api.quaternion.set()
    ref.current!.getWorldPosition(characterPosition);
    // fakeplane만들때만 쓸것
    // camera.lookAt(ref.current!.position);
    // api.applyForce([0, 3, 0], [characterPosition.x, characterPosition.y, characterPosition.z]);
    camera.lookAt(characterPosition);
    cameraPosition.set(characterPosition.x, characterPosition.y + 1, characterPosition.z + 2);
    camera.position.lerp(cameraPosition, delta);
  });
};
export default useCharacterMovement;
