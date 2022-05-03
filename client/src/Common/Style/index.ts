import { BaseImageProps, InlineStyleType } from "@Type/.";

export const TOP_MAIN_IMAGE_STYLES: BaseImageProps[] = [
  {
    url: "/asset/Main/Top/top_01.png",
    width: "130vw",
    height: "110vh",
    left: "-25vw",
    top: "-0px",
  },
  {
    url: "/asset/Main/Top/top_02.png",
    width: "97vw",
    height: "620px",
    left: "0px",
    top: "0px",
  },
  {
    url: "/asset/Main/Top/top_03.png",
    width: "100vw",
    height: "541px",
    left: "0px",
    top: "0px",
  },
  {
    url: "/asset/Main/Top/top_04.png",
    width: "102vw",
    height: "542px",
    left: "-4px",
    top: "-10px",
  },
  {
    url: "/asset/Main/Top/top_05.png",
    width: "70vw",
    height: "538px",
    left: "50vw",
    top: "-56px",
  },
];

export const MIDDLE_MAIN_IMAGE_STYLES: BaseImageProps[] = [
  {
    url: "/asset/Main/Middle/middle_02.png",
    width: "130vw",
    height: "280vh",
    left: "-85px",
    top: "195vh",
  },
  {
    url: "/asset/Main/Middle/middle_01.png",
    width: "120vw",
    height: "150vh",
    left: "-5vw",
    top: "75vh",
  },
];

export const InlineHover: InlineStyleType = { cursor: "pointer" };

export const FlexColumnStyle = `
  display:flex;
  flex-direction : column;
`;

export const CenterAroundStyle = `
  align-items: center;
  justify-content: space-around;
`;
