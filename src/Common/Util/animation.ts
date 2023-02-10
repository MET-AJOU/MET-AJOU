/* eslint-disable no-unused-expressions */
import { keyBoardStateType } from "@Type/Three";

export const initAnimation = ({ forward, backward, left, right, boost, space, actions, hello, dance, happy, question, lose }: keyBoardStateType & { actions: any }) => {
  if (!actions) return;
  if (!actions.walkingActions["Take 001"]) return;
  !forward && !backward && !left && !right ? actions.walkingActions["Take 001"].stop() : actions.walkingActions["Take 001"].play();
  !boost ? actions.runningActions["Take 001"].stop() : actions.runningActions["Take 001"].play();
  !space ? actions.jumpingActions["Take 001"].stop() : actions.jumpingActions["Take 001"].play();
  !hello ? actions.helloActions["Take 001"].stop() : actions.helloActions["Take 001"].play();
  !dance ? actions.dancingActions["Take 001"].stop() : actions.dancingActions["Take 001"].play();
  !happy ? actions.happyActions["Take 001"].stop() : actions.happyActions["Take 001"].play();
  !question ? actions.questionActions["Take 001"].stop() : actions.questionActions["Take 001"].play();
  !lose ? actions.loseActions["Take 001"].stop() : actions.loseActions["Take 001"].play();
};
