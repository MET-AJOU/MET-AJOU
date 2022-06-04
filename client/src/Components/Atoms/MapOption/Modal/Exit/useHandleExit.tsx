import { useNavigate } from "react-router-dom";

const useHandleExit = (handleCloseModal: Function) => {
  const navigator = useNavigate();
  const handleExit = () => {
    navigator("/");
    handleCloseModal();
  };
  return handleExit;
};

export default useHandleExit;
