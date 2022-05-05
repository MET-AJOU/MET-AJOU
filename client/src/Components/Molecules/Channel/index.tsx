import React from "react";
import { ChannelItemBox, ChannelItemImgContainer, ChannelItemTitleContainer } from "./styles";

const ChannelItem = ({ title, onClick, src, total, now }: ChannelItemType) => {
  return (
    <ChannelItemBox onClick={onClick}>
      <ChannelItemImgContainer>
        <img src={src} alt="맵 이미지" />
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
}
