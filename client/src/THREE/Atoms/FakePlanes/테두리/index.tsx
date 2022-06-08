import Box from "@THREE/Atoms/FakePlanes/테두리/test";

const 외벽높이 = 20;
const 사이드길이 = 70;
const 사이드두께 = 8;

const BorderFakePlane = () => {
  return (
    <>
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

export default BorderFakePlane;

// [z축 x축 y축]

// position [0] : - 왼쪽 + 오른쪽
// position [1] : 높이
// position [2] : + 아래 , - 위

// args [0] : 좌우 중심에서 길어지고 짧아짐
// args [1] : 높이 위아래
// args [2] : 위아래 중심에서 길어지고 짧아짐

// rotation [0] : 수직으로 세워짐
// rotation [1] : 회전
