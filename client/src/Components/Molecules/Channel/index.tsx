import React from "react";
import { ChannelItemBox, ChannelItemImg, ChannelItemImgContainer, ChannelItemTitleContainer } from "./styles";

const ChannelItem = ({ title, onClick, src, total, now, select }: ChannelItemType) => {
  return (
    <ChannelItemBox onClick={onClick}>
      <ChannelItemImgContainer>
        <ChannelItemImg src={src} alt="맵 이미지" select={select} />
        <div>
          {now} / {total}
        </div>
      </ChannelItemImgContainer>
      <ChannelItemTitleContainer>{title}</ChannelItemTitleContainer>
    </ChannelItemBox>
  );
};

export default React.memo(ChannelItem);

interface ChannelItemType {
  title: string;
  onClick: () => void;
  src: string;
  total: number;
  now: number;
  select: boolean;
}
