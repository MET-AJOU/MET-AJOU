import { useFBX, useAnimations } from "@react-three/drei";

interface animationSrcType {
  [index: string]: string;
}
const useGetAnimations = ({ animationSrcs, groupRef }: { animationSrcs: animationSrcType; groupRef: any }) => {
  const walkingAnimation = useFBX(animationSrcs.walkingSrc);
  const runningAnimation = useFBX(animationSrcs.runningSrc);
  const dancingAnimation = useFBX(animationSrcs.dancingSrc);
  const jumpingAnimation = useFBX(animationSrcs.jumpingSrc);

  const { animations: walkingAnimations } = walkingAnimation;
  const { animations: runningAnimations } = runningAnimation;
  const { animations: dancingAnimations } = dancingAnimation;
  const { animations: jumpingAnimations } = jumpingAnimation;
  const { actions: walkingActions } = useAnimations(walkingAnimations, groupRef);
  const { actions: runningActions } = useAnimations(runningAnimations, groupRef);
  const { actions: dancingActions } = useAnimations(dancingAnimations, groupRef);
  const { actions: jumpingActions } = useAnimations(jumpingAnimations, groupRef);
  return { walkingActions, runningActions, dancingActions, jumpingActions };
};

export default useGetAnimations;
