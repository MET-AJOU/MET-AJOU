/* eslint-disable no-loss-of-precision */

import { Info1, Info2, Info3, Info4, Info5, Info6 } from "@Atoms/Svgs";
import { ChanelInfoType, ValueDataType } from "@Type/.";

export const MAIN_INFO_DATA = [
  {
    Element: Info1,
    text: ["미니맵과 영상을 통해", "쉽고 재밌는 학교 정보 열람하기"],
  },
  {
    Element: Info2,
    text: ["재학생들만 접속할 수 있는", "시스템 구축"],
  },
  {
    Element: Info3,
    text: ["3d 가상세계 속", "아주대학교 캠퍼스 재현"],
  },
  {
    Element: Info4,
    text: ["문자, 음성채팅, 감정표현 등", "다양한 실시간 의사소통 방식 제공"],
  },
  {
    Element: Info5,
    text: ["캐릭터 커스터마이징을 이용해", "나만의 캐릭터 만들기"],
  },
  {
    Element: Info6,
    text: ["목적에 맞는", "룸 채널 선택 & 접속"],
  },
];

export const CARD_LIST_DATA: ValueDataType[] = [
  {
    src: "/asset/About/value1.svg",
    title: "만남",
    text: ["특별한 장소에서의 소중한", "추억들을 되새겨보고", "새로운 인연도 만나보세요"],
  },
  {
    src: "/asset/About/value2.svg",
    title: "응집",
    text: ["아주대학생들만의", "커뮤니티 공간 속에서", "소속감을 높여보세요"],
  },
  {
    src: "/asset/About/value3.svg",
    title: "표현",
    text: ["여러분 내면의", "다양한 페르소나들을", "아바타로 표현해보세요"],
  },
  {
    src: "/asset/About/value4.svg",
    title: "소통",
    text: ["문자 채팅,감정표현 등", "다양한 방식으로 여러분의", "마음을 전해보세요"],
  },
];

export const CHANNEL_INFO: ChanelInfoType[] = [
  {
    id: 1,
    title: "아주대학교 캠퍼스",
    src: "/asset/Channel/map.png",
    total: 100,
  },
  {
    id: 2,
    title: "자유 소통방",
    src: "/asset/Channel/talk.png",
    total: 30,
  },
  {
    id: 3,
    title: "토론 강의실",
    src: "/asset/Channel/debate.png",
    total: 30,
  },
  {
    id: 4,
    title: "체육관",
    src: "/asset/Channel/gym.png",
    total: 30,
  },
];

export const LoadingImageSrc = "./asset/Loading/";

export const LoadingImageSize = 2;
