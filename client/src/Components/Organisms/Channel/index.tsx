import ChannelItem from "@Molecules/Channel";
import RegisterNextButtonComponent from "@Molecules/Register/RegisterNextButtonComponent";

import { Br, RegisterDescript } from "@Organisms/Register/Email/styles";
import { ChannelFormContainer, ChannelFormTitle, ChannelItemContainer } from "./styles";
import useChannel, { useChannelType } from "./useChannel";
import { checkSrc } from "./util";

const ChannelForm = () => {
  const { select, next, handleMoveNext, handleSelect }: useChannelType = useChannel();
  return (
    <ChannelFormContainer>
      <ChannelFormTitle>채널 선택</ChannelFormTitle>
      <ChannelItemContainer>
        {CHANNEL_SET.map((item) => (
          <ChannelItem now={0} key={item.id} {...item} onClick={handleSelect(item.id)} />
        ))}
      </ChannelItemContainer>
      {next ? <RegisterDescript>접속할 채널을 선택해주세요</RegisterDescript> : <Br />}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(select)} />
    </ChannelFormContainer>
  );
};

export default ChannelForm;

const CHANNEL_SET = [
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
