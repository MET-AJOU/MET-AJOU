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
export const FieldSrc = "models/Fields";

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

export const GardenStairSrc = "models/GardenStairs";

export const AddGroundSrc = "models/AddGrounds";

export const AddGroundAssetSize = 1;

export const HillsAssetSize = 22;

export const RoadsAssetSize = 14;

export const GroundAssetSize = 14;

export const BuildingGroundAssetSize = 22;

export const FenceAssetSize = 18;

export const SideWalkAssetSize = 6;

export const StreetLampAssetSize = 21;

export const TreeAssetSize = 105;

export const TreeFBXAssetStart = 43;

export const TreeBaseAssetSize = 19;

export const TreeBaseFBXAssetStart = 20;

export const GardenBoxAssetSize = 8;

export const GardenBoxFBXAssetStart = 6;

export const BusAssetSize = 1;

export const TestAssetSize = 3;

export const FieldAssetSize = 13;

export const GardenStairAssetSize = 2;

export const BuildingAssetSrc = [
  `${BuildingsSrc}/building_centrallibrary.gltf`,
  `${BuildingsSrc}/building_hongjae.glb`,
  `${BuildingsSrc}/building_l_centralgate.gltf`,
  `${BuildingsSrc}/building_librarymap.gltf`,
  `${BuildingsSrc}/building_r_centralgate.gltf`,
  `${BuildingsSrc}/building_seongho.glb`,
  `${BuildingsSrc}/building_stonestatue.gltf`,
  `${BuildingsSrc}/building_woncheon.glb`,
  `${BuildingsSrc}/building_gym.gltf`,
  `${BuildingsSrc}/building_screen.gltf`,
  `${BuildingsSrc}/building_songjae.gltf`,
  `${BuildingsSrc}/building_yulgok.gltf`,
];

export const animationSrcs = {
  walkingSrc: "Character/common_people@walk.FBX",
  runningSrc: "Character/common_people@run.FBX",
  dancingSrc: "Character/common_people@dance.FBX",
  jumpingSrc: "Character/common_people@jump-up.FBX",
};
