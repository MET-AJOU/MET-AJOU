/* eslint-disable react/require-default-props */
import { SELECTMODE } from "@Constant/URL";
import useMovePage from "@Hook/useMovePage";
import React from "react";
import { Button } from "./styles";

const StartButton = ({ color, className }: { color: string; className?: string }) => {
  const handleMoveStart = useMovePage(SELECTMODE);

  return (
    <Button color={color} onClick={handleMoveStart} className={className}>
      start now
    </Button>
  );
};

export default React.memo(StartButton);
