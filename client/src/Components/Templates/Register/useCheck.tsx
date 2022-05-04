import { useCallback, useState } from "react";

const useCheck = () => {
  const [check, setCheck] = useState<boolean>(false);

  const handleCheck = useCallback(() => setCheck((prev) => !prev), []);

  return { check, handleCheck };
};

export default useCheck;

export interface useCheckType {
  check: boolean;
  handleCheck: () => void;
}
