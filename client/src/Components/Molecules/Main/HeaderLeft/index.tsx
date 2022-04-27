/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from "react-router-dom";
import Logo from "@Atoms/Logo";
import { InlineHover } from "@Style/.";

const MainHeaderLeft = () => {
  const navigator = useNavigate();
  const handleMoveHome = () => navigator("/");

  return <Logo style={InlineHover} onClick={handleMoveHome} />;
};

export default MainHeaderLeft;
