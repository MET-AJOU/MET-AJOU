import Logo from "@Atoms/Svgs/Logo";
import { InlineHover } from "@Style/.";
import useMovePage from "@Hook/useMovePage";

const MainHeaderLeft = () => {
  const handleMoveHome = useMovePage("/");

  return <Logo style={InlineHover} onClick={handleMoveHome} />;
};

export default MainHeaderLeft;
