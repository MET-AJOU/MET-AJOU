import { useNavigate } from "react-router-dom";

const useHandleExit = () => {
  const navigator = useNavigate();
  const handleExit = () => {
    navigator("/");
  };
  return handleExit;
};

export default useHandleExit;
