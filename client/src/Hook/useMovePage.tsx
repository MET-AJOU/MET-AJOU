import { useNavigate } from "react-router-dom";

const useMovePage = (url: string) => {
  const navigator = useNavigate();
  const handleNavigator = () => navigator(url);
  return handleNavigator;
};

export default useMovePage;
