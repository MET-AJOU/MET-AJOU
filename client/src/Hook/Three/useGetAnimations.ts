import { useFBX, useAnimations } from "@react-three/drei";

interface animationSrcType {
  [index: string]: string;
}
const useGetAnimations = ({ animationSrcs, ref }: { animationSrcs: animationSrcType; ref: any }) => {
  const walkingAnimation = useFBX(animationSrcs.walkingSrc);
  const runningAnimation = useFBX(animationSrcs.runningSrc);
  const dancingAnimation = useFBX(animationSrcs.dancingSrc);
  const jumpingAnimation = useFBX(animationSrcs.jumpingSrc);
  const { animations: walkingAnimations } = walkingAnimation;
  const { animations: runningAnimations } = runningAnimation;
  const { animations: dancingAnimations } = dancingAnimation;
  const { animations: jumpingAnimations } = jumpingAnimation;
  const { actions: walkingActions } = useAnimations(walkingAnimations, ref);
  const { actions: runningActions } = useAnimations(runningAnimations, ref);
  const { actions: dancingActions } = useAnimations(dancingAnimations, ref);
  const { actions: jumpingActions } = useAnimations(jumpingAnimations, ref);
  return { walkingActions, runningActions, dancingActions, jumpingActions };
};

export default useGetAnimations;
