/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "@THREE/Atoms/Building/test";

const 외벽높이 = 20;
const 사이드길이 = 70;
const 사이드두께 = 8;

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
      {/* 왼쪽아래 */}
      <Box color="blue" position={[-15, 0, 26]} args={[28.1, 6.75, 55]} rotation={[0, Math.PI / 3.54, 0]} />
      {/* 오른쪽 아래 맨오른쪽 */}
      <Box color="pink" position={[16.555, 0, 17.3]} args={[13.5, 6.75, 28.4]} />
      <Box color="red" position={[9.821369171142578, 0, 22.94983673095703]} args={[3, 6.75, 7]} rotation={[0, Math.PI / 1.3, -Math.PI / 1.028]} />
      {/* 오른쪽 아래 가운데 */}
      <Box color="black" position={[3.5, 0, 19]} args={[10, 6.75, 11]} rotation={[0, Math.PI / 3.5, 0]} />
      <Box color="black" position={[7, 0, 11]} args={[10, 6.75, 16]} />
      {/* 오른쪽 아래 왼쪽 */}

      {/* <Box position={[-3, 2, 30]} args={[50, 2, 56.11]} color="black" /> */}

      {/* 오른쪽 테두리 */}
      <Box position={[28, 4, 8]} args={[사이드두께, 외벽높이, 사이드길이]} color="blue" />
      {/* 아래 테두리 */}
      <Box position={[-10, 4, 33.4]} args={[사이드길이, 외벽높이, 사이드두께]} color="blue" />
      {/* 왼쪽 테두리 */}
      <Box position={[-31, 4, 0]} args={[사이드두께, 외벽높이, 사이드길이]} color="blue" />
      {/* 오른쪽위 대각선 */}
      <Box position={[8.75, 4, -40]} args={[사이드두께, 외벽높이, 사이드길이]} rotation={[0, Math.PI / 3.3, 0]} color="blue" />
      {/* 왼쪽위 대각선 */}
      <Box position={[-15.8, 4, -42]} args={[사이드두께, 외벽높이, 사이드길이]} rotation={[0, -Math.PI / 5, 0]} color="blue" />
    </>
  );
};

export default FakePlanes;
// 2.40707612991333

// 2.508332595825195
//  22.15004539489746, y: 3.022340774536133, z: 32.30088424682617
//  -29.395803451538086, y: 3.4668426513671875, z: 27.40150260925293}
// 15.757667541503906, y: 4.305564880371094, z: 31.476810455322266
