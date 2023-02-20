import StaticComponents from "@THREE/Organism/Debate/StaticComponents";
import MapContainer from "../Map";

const DebateMap = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <MapContainer setJoinedUserNumber={setJoinedUserNumber}>
      <StaticComponents setLoading={setLoading} />
    </MapContainer>
  );
};

export default DebateMap;
