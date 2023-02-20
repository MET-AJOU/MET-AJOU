import StaticComponents from "@THREE/Organism/Talk/StaticComponents";
import MapContainer from "../Map";

const TalkMap = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <MapContainer setJoinedUserNumber={setJoinedUserNumber}>
      <StaticComponents setLoading={setLoading} />
    </MapContainer>
  );
};

export default TalkMap;
