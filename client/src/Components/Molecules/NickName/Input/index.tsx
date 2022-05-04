import { NickNameInputContainer } from "./styles";

const NickNameInput = ({ nickName, handleNickName }: NickNameInputType) => {
  return <NickNameInputContainer placeholder="name" value={nickName} onChange={handleNickName} />;
};

export default NickNameInput;

export interface NickNameInputType {
  nickName: string;
  handleNickName: ({
    target: { value },
  }: {
    target: {
      value: string;
    };
  }) => void;
}
