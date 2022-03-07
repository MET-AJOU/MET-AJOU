import Box from "@THREE/Atoms/Building/test";

const FakePlanes = () => {
  // [z축 x축 y축]
  return (
    <>
      <Box position={[-1, 0.38, 0.566]} args={[9.73, 1.2, 4.11]} />
      <Box position={[-1, 0.6, -3.6]} args={[9.73, 1.7, 4.8]} rotation={[-Math.PI / 1.09, 0, 0]} />
      <Box position={[-0.1, 1.23, -7.903]} args={[10.03, 1.7, 4.9]} />
    </>
  );
};

export default FakePlanes;
