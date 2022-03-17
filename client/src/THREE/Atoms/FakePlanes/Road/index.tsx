import Box from "@THREE/Atoms/Building/test";

// [z축 x축 y축]

// position [0] : - 왼쪽 + 오른쪽
// position [1] : 높이
// position [2] : + 아래 , - 위

// args [0] : 좌우 중심에서 길어지고 짧아짐
// args [1] : 높이 위아래
// args [2] : 위아래 중심에서 길어지고 짧아짐

// rotation [0] : 위에서 볼때 윗방향으로 돈다
// rotation [1] : 시계방향 회전
// rotation [2] : 오른손 바닥 뒤집는방향

const RoadFakePlane = () => {
  return (
    <>
      <Box position={[4.8, 0, 23.5]} args={[1.3, 8, 28]} rotation={[-Math.PI / 55, Math.PI / 3.55, 0]} color="black" />
      <Box position={[-7.5, 0, 13.4]} args={[1.3, 8, 10]} rotation={[Math.PI / 22, Math.PI / 3.55, -Math.PI / 24]} color="black" />
    </>
  );
};

export default RoadFakePlane;
