import { useCallback, useState } from "react";

const useSelectEquip = () => {
  const [select, setSelect] = useState<number>(0);

  const handleSelect = useCallback((idx: number) => () => setSelect(idx), []);

  return { select, handleSelect };
};

export default useSelectEquip;

export interface useSelectEquipType {
  select: number;
  handleSelect: (idx: number) => () => void;
}
