import useOpenModal from "@Atoms/MapOption/useOpenModal";
import Chat from "@Molecules/MapOption/Chat";
import MiniMap from "@Molecules/MapOption/MiniMap";
import Voice from "@Molecules/MapOption/Voice";

const MapOptionBottom = () => {
  const { handleMiniMapOpen } = useOpenModal();
  return (
    <>
      <Chat />
      <Voice />
      <MiniMap handleMiniMapOpen={handleMiniMapOpen} />
    </>
  );
};

export default MapOptionBottom;
