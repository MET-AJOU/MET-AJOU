import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import Socket from "@Socket/.";
import { MyPositionType } from "@Type/Three";
import { useRecoilValue } from "recoil";
import { myUserIdAtom } from "@Recoils/Characters";

const cameraDirection = new Vector3();
let changeDirectionDebounceTimer: null | NodeJS.Timeout;
const DEBOUNCE_TIME = 16 * 2;

const Camera = ({ myPosition }: { myPosition: MyPositionType }) => {
  const { camera } = useThree();
  const myUserId = useRecoilValue(myUserIdAtom);

  const handleCameraDirectionChange = () => {
    if (changeDirectionDebounceTimer) return;

    changeDirectionDebounceTimer = setTimeout(() => {
      camera.getWorldDirection(cameraDirection);
      Socket.instance?.emit("changeCameraDirection", { userId: myUserId, cameraDirection, position: myPosition.current });
      changeDirectionDebounceTimer = null;
    }, DEBOUNCE_TIME);
  };

  return <PointerLockControls onChange={handleCameraDirectionChange} />;
};

export default Camera;
