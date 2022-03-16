import Box from "@THREE/Atoms/Building/test";

const FakePlanes = () => {
  // [z축 x축 y축]
  return (
    <>
      <Box position={[-3, 2, 30]} args={[50, 2, 56.11]} color="black" />
      <Box color="blue" position={[-1.152040481567383, 2.38932595825195, 28.468360900878906]} args={[27, 1.8, 10]} rotation={[Math.PI / 1.02, 0, 0]} />
      <Box color="red" position={[-9.763340950012207, 2.25932595825195, 20.11005210876465]} args={[5, 1.8, 15]} rotation={[0, 0, Math.PI / 1.028]} />
      {/* <Box position={[-1, 0.6, -3.6]} args={[9.73, 1.7, 4.8]} rotation={[-Math.PI / 1.09, 0, 0]} />
      <Box position={[-0.1, 1.23, -7.903]} args={[10.03, 1.7, 4.9]} /> */}
    </>
  );
};

export default FakePlanes;

//  22.15004539489746, y: 3.022340774536133, z: 32.30088424682617
//  -29.395803451538086, y: 3.4668426513671875, z: 27.40150260925293}
// 15.757667541503906, y: 4.305564880371094, z: 31.476810455322266
