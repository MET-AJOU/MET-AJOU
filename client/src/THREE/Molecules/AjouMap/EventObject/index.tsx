import { EventObjectAssetName, EventObjectSrc } from "@Constant/Three";
import { FBXs } from "@THREE/Atoms/Fbxs";

export const EventObject = () => {
  return (
    <>
      {EventObjectAssetName.map((src: string) => (
        <FBXs src={`${EventObjectSrc}/${src}.fbx`} size={1} />
      ))}
    </>
  );
};
