/* eslint-disable react/no-array-index-key */
import { StreetLampAssetSize, StreetLampSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const StreetLamps = () => {
  return (
    <>
      {new Array(StreetLampAssetSize).fill(1).map((_, idx) => (
        <FBXs src={`${StreetLampSrc}/streetamp_${String(idx + 1).padStart(2, "0")}.fbx`} key={`streetlamp_${idx}`} />
        // <BlockFbx src={`${StreetLampSrc}/streetamp_${String(idx + 1).padStart(2, "0")}.fbx`} key={`streetlamp_${idx}`} />
      ))}
    </>
  );
};

export default StreetLamps;
