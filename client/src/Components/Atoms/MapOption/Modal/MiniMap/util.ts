const getEventHandlers = ({ setClick, setHover }: { setClick: React.Dispatch<React.SetStateAction<number>>; setHover: React.Dispatch<React.SetStateAction<number>> }) => {
  const getIdx = (element: HTMLElement): number => Number(element.dataset.idx);

  const handleClick = (e: React.MouseEvent) => {
    console.log(e.target);
    if (!(e.target as HTMLElement).closest(".pin")) {
      setClick(-1);
      return;
    }
    const idx = getIdx(e.target as HTMLElement);
    setClick(idx);
  };
  const handleHover = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest(".pin")) {
      setHover(-1);
      return;
    }
    const idx = getIdx(e.target as HTMLElement);
    setHover(idx);
  };
  return [handleClick, handleHover];
};

export default getEventHandlers;
