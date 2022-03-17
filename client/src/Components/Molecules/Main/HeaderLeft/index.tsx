/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useNavigate } from "react-router-dom";

const MainHeaderLeft = () => {
  const navigator = useNavigate();
  const handleMoveHome = () => navigator("/");
  return <img src="/asset/Logo.png" alt="logo" width="45px" style={{ cursor: "pointer" }} onClick={handleMoveHome} />;
};

export default MainHeaderLeft;
