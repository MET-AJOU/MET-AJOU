import { BuildingNames, BuildingsSrc } from "@Constant/Three";
import Fbxs from "@THREE/Atoms/Fbxs";

const Buildings = () => {
  // 가로 x 높이 y 세로 z
  return (
    <>
      {BuildingNames.map((src: string) => (
        <Fbxs key={`Buidings${src}`} src={`${BuildingsSrc}/building_${src}.fbx`} />
      ))}
    </>
  );
};

export default Buildings;
