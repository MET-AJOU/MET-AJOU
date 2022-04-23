import { useRef, useEffect } from "react";

const useLineMove = () => {
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgRef1.current && imgRef2.current) {
        imgRef1.current.classList.toggle("show");
        imgRef2.current.classList.toggle("show");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return [imgRef1, imgRef2];
};

export default useLineMove;
