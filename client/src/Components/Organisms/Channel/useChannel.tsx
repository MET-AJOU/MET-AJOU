import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUrl } from "./util";

const useChannel = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState<number>(0);
  const [next, setNext] = useState<boolean>(false);

  const handleSelect = useCallback(
    (id: number) => () => {
      setSelect(id);
      setNext(false);
    },
    []
  );

  const handleMoveNext = () => {
    if (select === 0 || next) {
      setNext(true);
      return;
    }
    const url = getUrl(select);
    navigate(url);
  };

  return { select, next, handleMoveNext, handleSelect };
};

export default useChannel;

export interface useChannelType {
  select: number;
  next: boolean;
  handleMoveNext: () => void;
  handleSelect: (id: number) => () => void;
}
