import LoadingTemplate from "@Templates/Loading";
import { useEffect } from "react";

const LoadingPage = ({ setLoading }: { setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
  useEffect(() => {
    return () => {
      setLoading(true);
    };
  }, []);
  return <LoadingTemplate />;
};

export default LoadingPage;
