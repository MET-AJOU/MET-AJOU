/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { TestAssetSize, TestSrc } from "@Constant/Three";
import Ground from "@THREE/Atoms/Ground";

const Tests = () => {
  const blocking = () => console.log("hit Test");
  return (
    <>
      {/* {new Array(TestAssetSize).fill(1).map((_, idx) => ( */}
      <Ground key={1} src={`${TestSrc}/ground_color_test_1.gltf`} 키="hill" 블락함수={blocking} />
      <Ground key={2} src={`${TestSrc}/ground_color_test_2.gltf`} 키="out_ground" 블락함수={blocking} />
      <Ground key={3} src={`${TestSrc}/ground_color_test_3.gltf`} 키="building_ground" 블락함수={blocking} />
      {/* ))} */}
    </>
  );
};

export default Tests;
