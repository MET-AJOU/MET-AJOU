import { InlineHover } from "@Style/.";

const Pin = ({ path, color, idx, className }: { className: string; path: string; color: string; idx: number }) => {
  return <path data-idx={idx} className={className} style={InlineHover} d={path} fill={color} stroke="white" />;
};

export default Pin;
