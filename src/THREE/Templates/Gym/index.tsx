import StaticComponents from "@THREE/Organism/Gym/StaticComponents";
import MapContainer from "../Map";

const GymMap = ({ setJoinedUserNumber, setLoading }: { setJoinedUserNumber: React.Dispatch<React.SetStateAction<number>>; setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <MapContainer setJoinedUserNumber={setJoinedUserNumber}>
      <StaticComponents setLoading={setLoading} />
    </MapContainer>
  );
};

export default GymMap;
