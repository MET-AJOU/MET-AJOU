import { CHANNEL_INFO } from "@Constant/.";
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
        {CHANNEL_INFO.map((item, idx) => (
          <ChannelItem now={0} select={idx + 1 === select} key={item.id} {...item} onClick={handleSelect(item.id)} />
        ))}
      </ChannelItemContainer>
      {next ? <RegisterDescript>접속할 채널을 선택해주세요</RegisterDescript> : <Br />}
      <RegisterNextButtonComponent handleMoveNext={handleMoveNext} src={checkSrc(select)} />
    </ChannelFormContainer>
  );
};

export default ChannelForm;
