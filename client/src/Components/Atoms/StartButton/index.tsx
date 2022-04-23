import React from "react";
import { Button } from "./styles";
import useOpenModalHook from "./useOpenModalHook";

const StartButton = () => {
  const on = useOpenModalHook();

  return <Button onClick={on}>start now</Button>;
};

export default React.memo(StartButton);
