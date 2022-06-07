/* eslint-disable react/no-array-index-key */
import { EventAssetSize, EventSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

const Event = () => {
  return (
    <>
      {new Array(EventAssetSize).fill(1).map((_, idx) => (
        <FBXs key={`Event${idx}`} src={`${EventSrc}/event_${idx + 1}.fbx`} />
        // <BlockFbx key={`GardenBox${idx}`} src={`${GardenBoxSrc}/gardenbox_${idx + 1}.fbx`} />
      ))}
    </>
  );
};

export default Event;
