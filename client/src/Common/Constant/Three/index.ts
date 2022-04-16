import { keyBoardStateType } from "@Type/Three";

export const DefaultKeyboardState: keyBoardStateType = {
  backward: false,
  forward: false,
  left: false,
  right: false,
  boost: false,
  space: false,
  dance: false,
};

export const HillsSrc = "models/Hill";

export const BuildingsSrc = "models/Building";

export const RoadsSrc = "models/Roads";

export const GroundsSrc = "models/Grounds";

export const BuildingGroundsSrc = "models/BuildingGrounds";

export const FenceSrc = "models/Fence";

export const SideWalkSrc = "models/SideWalks";

export const StreetLampSrc = "models/StreetLamps";

export const TreeSrc = "models/Trees";

export const TreeBaseSrc = "models/TreeBases";

export const GardenBoxSrc = "models/GardenBoxs";

export const BusSrc = "models/Buses";

export const TestSrc = "models/Test";

export const HillsAssetSize = 22;

export const RoadsAssetSize = 14;

export const GroundAssetSize = 13;

export const BuildingGroundAssetSize = 22;

export const FenceAssetSize = 18;

export const SideWalkAssetSize = 6;

export const StreetLampAssetSize = 10;

export const TreeAssetSize = 42;

export const TreeBaseAssetSize = 19;

export const GardenBoxAssetSize = 6;

export const BusAssetSize = 1;

export const TestAssetSize = 3;

export const animationSrcs = {
  walkingSrc: "Character/common_people@walk.FBX",
  runningSrc: "Character/common_people@run.FBX",
  dancingSrc: "Character/common_people@dance.FBX",
  jumpingSrc: "Character/common_people@jump-up.FBX",
};
