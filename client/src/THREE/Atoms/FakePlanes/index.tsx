/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "@THREE/Atoms/Building/test";
import GroundFakePlane from "./Ground";
import RoadFakePlane from "./Road";
import BorderFakePlane from "./테두리";

const FakePlanes = () => {
  // [z축 x축 y축]

  // position [0] : - 왼쪽 + 오른쪽
  // position [1] : 높이
  // position [2] : + 아래 , - 위

  // args [0] : 좌우 중심에서 길어지고 짧아짐
  // args [1] : 높이 위아래
  // args [2] : 위아래 중심에서 길어지고 짧아짐

  // rotation [0] : 수직으로 세워짐
  // rotation [1] : 회전
  return (
    <>
      <GroundFakePlane />
      <RoadFakePlane />
      <BorderFakePlane />
    </>
  );
};

export default FakePlanes;
// 2.40707612991333

// 2.508332595825195
//  22.15004539489746, y: 3.022340774536133, z: 32.30088424682617
//  -29.395803451538086, y: 3.4668426513671875, z: 27.40150260925293}
// 15.757667541503906, y: 4.305564880371094, z: 31.476810455322266
