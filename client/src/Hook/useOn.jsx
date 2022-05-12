import { useCallback, useState } from "react";

const useOn = () => {
  const [on, setOn] = useState(false);

  const handleToggleOn = useCallback(() => {
    setOn((prev) => !prev);
  }, []);

  return { on, handleToggleOn };
};

export default useOn;
