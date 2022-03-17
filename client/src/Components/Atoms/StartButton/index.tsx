import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

const StartButton = () => {
  const navigator = useNavigate();
  const handleStartClick = () => navigator("/map");
  return <Button onClick={handleStartClick}>start now</Button>;
};

export default React.memo(StartButton);
