export const getUrl = (id: number): string => {
  switch (id) {
    case 1:
      return "/map";
    case 2:
      return "/talk";
    case 3:
      return "/debate";
    default:
      return "/";
  }
};

export const checkSrc = (data: number) => (data > 0 ? "/asset/Register/SelectButton.png" : "/asset/Register/unSelectButton.svg");
