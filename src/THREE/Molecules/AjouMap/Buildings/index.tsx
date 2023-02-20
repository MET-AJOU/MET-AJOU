import { BuildingNames, BuildingsSrc } from "@Constant/Three";
import { BlockFbx } from "@THREE/Atoms/Fbxs";

export const Buildings = () => {
  return (
    <>
      {BuildingNames.map((src: string) => (
        <BlockFbx key={`Buidings${src}`} src={`${BuildingsSrc}/building_${src}.fbx`} />
      ))}
    </>
  );
};
