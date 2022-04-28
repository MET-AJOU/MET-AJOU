/* eslint-disable react/require-default-props */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

const StartButton = ({ color, className }: { color: string; className?: string }) => {
  const navigator = useNavigate();
  const handleMoveStart = () => navigator("/selectMode");

  return (
    <Button color={color} onClick={handleMoveStart} className={className}>
      start now
    </Button>
  );
};

export default React.memo(StartButton);
