import Bubble from "@Atoms/Bubble";
import Pin from "@Atoms/Pin";
import { BUBBLE_INFO, MINIMAP_INFO } from "@Constant/MiniMap";
import React, { useState } from "react";
import { Map, Pins, BubbleContainer } from "./styles";
import getEventHandlers from "./util";

const MiniMap = ({ clickState, setClick }: { clickState: number; setClick: React.Dispatch<React.SetStateAction<number>> }) => {
  const [hover, setHover] = useState(-1);
  const [handleClick, handleHover] = getEventHandlers({ setClick, setHover });

  return (
    <Map>
      <Pins onClick={handleClick} onMouseOver={handleHover}>
        <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          {MINIMAP_INFO.map(({ path }, idx) => (
            <Pin path={path} idx={idx} className="pin" color={clickState === idx ? "#6096FD" : "#656565"} />
          ))}
        </svg>
      </Pins>
      <BubbleContainer>{hover !== -1 && <Bubble pattern={BUBBLE_INFO[22 - hover]} />}</BubbleContainer>
    </Map>
  );
};

export default MiniMap;
