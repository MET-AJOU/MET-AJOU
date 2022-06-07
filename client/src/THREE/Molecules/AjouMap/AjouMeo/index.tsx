/* eslint-disable react/no-array-index-key */
import { AjouMeoAssetSize, AjouMeoSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const AjouMeo = () => {
  return (
    <>
      {new Array(AjouMeoAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`AjouMeo${idx}`} src={`${AjouMeoSrc}/ajoumeo_${idx + 1}.fbx`} />
        // <BlockFbx key={`GardenBox${idx}`} src={`${GardenBoxSrc}/gardenbox_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default AjouMeo;
