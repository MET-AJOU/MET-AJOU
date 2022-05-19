import { InlineHover } from "@Style/.";

const Pin = ({ path, color, idx, setHover }: { path: string; color: string; idx: number; setHover: React.Dispatch<React.SetStateAction<number>> }) => {
  const handleHover = () => setHover(idx);
  const handleLeave = () => setHover(-1);
  return <path style={InlineHover} d={path} fill={color} stroke="white" onMouseEnter={handleHover} onMouseLeave={handleLeave} />;
};

export default Pin;
