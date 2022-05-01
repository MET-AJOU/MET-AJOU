import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

const StartButton = ({ color }: { color: string }) => {
  const navigator = useNavigate();
  const handleMoveStart = () => navigator("/selectMode");

  return (
    <Button color={color} onClick={handleMoveStart}>
      start now
    </Button>
  );
};

export default React.memo(StartButton);
