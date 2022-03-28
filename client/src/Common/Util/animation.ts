/* eslint-disable no-unused-expressions */
import { keyBoardStateType } from "@Type/Three";

export const initAnimation = ({ forward, backward, left, right, boost, space, actions, dance }: keyBoardStateType & { actions: any }) => {
  !forward && !backward && !left && !right ? actions.walkingActions["Take 001"].stop() : actions.walkingActions["Take 001"].play();
  !boost ? actions.runningActions["Take 001"].stop() : actions.runningActions["Take 001"].play();
  !space ? actions.jumpingActions["Take 001"].stop() : actions.jumpingActions["Take 001"].play();
  !dance ? actions.dancingActions["Take 001"].stop() : actions.dancingActions["Take 001"].play();
};
