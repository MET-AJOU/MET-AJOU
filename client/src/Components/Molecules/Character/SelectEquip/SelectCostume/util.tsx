export const getCharacterCostume = (character: number) =>
  COSTUME_SET.map((item, idx) => {
    if (idx === 0) {
      return {
        ...item,
        src: `/asset/Character/Costume/basic${character}.png`,
      };
    }
    return item;
  });

const COSTUME_SET = [
  {
    id: 0,
    src: `/asset/Character/Costume/basic${0}.png`,
  },
  {
    id: 1,
    src: `/asset/Character/Costume/Tshirt.png`,
  },
  {
    id: 2,
    src: `/asset/Character/Costume/과잠.png`,
  },
];
