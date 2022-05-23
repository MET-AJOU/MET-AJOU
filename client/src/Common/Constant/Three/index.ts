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
export const FieldSrc = "models/AjouMap/Fields";

export const HillsSrc = "models/AjouMap/Hill";

export const BuildingsSrc = "models/AjouMap/Building";

export const RoadsSrc = "models/AjouMap/Roads";

export const GroundsSrc = "models/AjouMap/Grounds";

export const BuildingGroundsSrc = "models/AjouMap/BuildingGrounds";

export const FenceSrc = "models/AjouMap/Fence";

export const SideWalkSrc = "models/AjouMap/SideWalks";

export const StreetLampSrc = "models/AjouMap/StreetLamp";

export const TreeSrc = "models/AjouMap/Trees";

export const TreeBaseSrc = "models/AjouMap/TreeBases";

export const GardenBoxSrc = "models/AjouMap/GardenBoxs";

export const ObjectSrc = "models/AjouMap/Objects";

export const TestSrc = "models/AjouMap/Test";

export const GardenStairSrc = "models/AjouMap/GardenStairs";

export const AddGroundSrc = "models/AjouMap/AddGrounds";

export const CeilingSrc = "models/Debate/Ceilings";

export const ChairSrc = "models/Debate/Chairs";

export const FloorSrc = "models/Debate/Floors";

export const OutWallsSrc = "models/Debate/OutWalls";

export const WallsSrc = "models/Debate/Walls";

export const PropsSrc = "models/Debate/Props";

export const RoomSrc = "models/Debate/Room";

export const TablesSrc = "models/Debate/Tables";

export const WindowSrc = "models/Debate/Windows";

export const AddGroundAssetSize = 1;

export const HillsAssetSize = 22;

export const RoadsAssetSize = 14;

export const GroundAssetSize = 14;

export const BuildingGroundAssetSize = 22;

export const FenceAssetSize = 18;

export const SideWalkAssetSize = 6;

export const StreetLampAssetSize = 30;

export const TreeAssetSize = 89;

export const TreeBaseAssetSize = 19;

export const TreeBaseFBXAssetStart = 20;

export const GardenBoxAssetSize = 8;

export const ObjectAssetSize = 1;

export const TestAssetSize = 3;

export const FieldAssetSize = 13;

export const GardenStairAssetSize = 2;

export const CeilingAssetSize = 3;

export const ChairAssetSize = 32;

export const FloorAssetSize = 2;

export const PropsAssetSize = 13;

export const TabelAssetSize = 16;

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
