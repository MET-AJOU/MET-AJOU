/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from "react-router-dom";
import Logo from "@Atoms/Logo";

const MainHeaderLeft = () => {
  const navigator = useNavigate();
  const handleMoveHome = () => navigator("/");

  return <Logo style={{ cursor: "pointer" }} onClick={handleMoveHome} />;
};

export default MainHeaderLeft;
