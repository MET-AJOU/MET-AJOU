// import Box from "@THREE/Atoms/Building/test";

// [z축 x축 y축]

// position [0] : - 왼쪽 + 오른쪽
// position [1] : 높이
// position [2] : + 아래 , - 위

// args [0] : 좌우 중심에서 길어지고 짧아짐
// args [1] : 높이 위아래
// args [2] : 위아래 중심에서 길어지고 짧아짐

// rotation [0] : 수직으로 세워짐
// rotation [1] : 회전

const GroundFakePlane = () => {
  return (
    <>
      {/* 왼쪽아래 */}
      {/* <Box color="blue" position={[-15, 0, 26]} args={[28.1, 6.75, 55]} rotation={[0, Math.PI / 3.54, 0]} /> */}
      {/* 오른쪽 아래 맨오른쪽 */}
      {/* <Box color="pink" position={[16.555, 0, 17.3]} args={[13.5, 6.75, 28.4]} /> */}
      {/* <Box color="red" position={[9.821369171142578, 0, 22.94983673095703]} args={[3, 6.75, 7]} rotation={[0, Math.PI / 1.3, -Math.PI / 1.028]} /> */}
      {/* 오른쪽 아래 가운데 */}
      {/* <Box color="black" position={[3.5, 0, 19]} args={[10, 6.75, 11]} rotation={[0, Math.PI / 3.5, 0]} /> */}
      {/* <Box color="black" position={[7, 0, 11]} args={[10, 6.75, 16]} /> */}
      {/* 오른쪽 아래 왼쪽 */}
    </>
  );
};

export default GroundFakePlane;
