import { useFBX, useAnimations } from "@react-three/drei";

interface animationSrcType {
  [index: string]: string;
}
const useGetAnimations = ({ animationSrcs, ref }: { animationSrcs: animationSrcType; ref: any }) => makeActions({ animationSrcs, ref });

const makeActions = ({ animationSrcs, ref }: { animationSrcs: animationSrcType; ref: any }) =>
  Object.entries(animationSrcs).reduce((acc: object, [key, src]) => {
    const { animations } = useFBX(src);
    const { actions } = useAnimations(animations, ref);
    return { ...acc, [`${key}Actions`]: actions };
  }, {});

export default useGetAnimations;
