import TestBox from "@THREE/Atoms/TestBox";

const Test = () => {
  return (
    <>
      <TestBox position={[-4.5, 8, -9]} />
      <TestBox position={[-4.5, 8, -8]} />
      <TestBox position={[-4.5, 8, -6]} />
      <TestBox position={[-4.5, 8, -6]} />
      <TestBox position={[-4.5, 8, -5]} />
      <TestBox position={[-4.5, 8, -4]} />
      <TestBox position={[-4.5, 8, -3]} />
      <TestBox position={[-4.5, 8, -2]} />
      <TestBox position={[-4.5, 8, -1]} />
      <TestBox position={[-4.5, 8, 0]} />
      <TestBox position={[-4.5, 8, 0]} />
      <TestBox position={[-4.5, 8, 1]} />
    </>
  );
};

export default Test;
