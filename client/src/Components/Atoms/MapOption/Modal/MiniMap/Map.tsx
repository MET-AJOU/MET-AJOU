import Bubble from "@Atoms/Bubble";
import Pin from "@Atoms/Pin";
import { BUBBLE_INFO, MINIMAP_INFO } from "@Constant/MiniMap";
import { useState } from "react";
import { Map, Pins } from "./styles";

const MiniMap = ({ setClick }: { setClick: React.Dispatch<React.SetStateAction<number>> }) => {
  const [hover, setHover] = useState(-1);

  return (
    <Map>
      <Pins>
        <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {MINIMAP_INFO.map(({ path }, idx) => (
            <Pin setClick={setClick} path={path} idx={idx} setHover={setHover} color={idx === hover ? "#6096FD" : "#656565"} />
          ))}
        </svg>
      </Pins>
      {hover !== -1 && <Bubble pattern={BUBBLE_INFO[hover]} />}
    </Map>
  );
};

export default MiniMap;
