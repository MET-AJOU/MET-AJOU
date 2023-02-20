/* eslint-disable @typescript-eslint/no-unused-vars */
import { userDataAtom } from "@Recoils/UserData";
import { routingType, updateUserData } from "@Route/util";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { Button } from "@Atoms/StartButton/styles";
import { ButtonCont, InfoInput, InfoLabel, InfoRow, MessageCont, MessageInput, MyPageUserInfoBody } from "./styles";

const InfoBody = () => {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const { userName, userNickName, userDepartment, userStudentCode, userEmail, userMessage } = userData as routingType;
  const [change, isChange] = useState(false);
  const inputRefs = new Array(6).fill(0).map(() => useRef(null));
  const handlePost = () => {
    const postData = getPostUserInfoData({ inputRefs, defaultValues: { userName, userNickName, userDepartment, userStudentCode, userMessage } });
    updateUserData({ postData, setUserData });
  };

  return (
    <MyPageUserInfoBody onChange={() => isChange(true)}>
      <InfoRow>
        <InfoLabel>닉네임</InfoLabel>
        <InfoInput disabled ref={inputRefs[0]} placeholder={userName || ""} />
      </InfoRow>
      <InfoRow>
        <InfoLabel>이름</InfoLabel>
        <InfoInput ref={inputRefs[1]} placeholder={userNickName || ""} />
      </InfoRow>
      <InfoRow>
        <InfoLabel>학과</InfoLabel>
        <InfoInput ref={inputRefs[2]} placeholder={userDepartment || ""} />
      </InfoRow>
      <InfoRow>
        <InfoLabel>학번</InfoLabel>
        <InfoInput ref={inputRefs[3]} placeholder={userStudentCode || ""} />
      </InfoRow>
      <InfoRow>
        <InfoLabel>이메일</InfoLabel>
        <InfoInput disabled placeholder={userEmail || ""} />
      </InfoRow>
      <MessageCont>
        <InfoLabel>상태메세지</InfoLabel>
        <MessageInput ref={inputRefs[4]} placeholder={userMessage || ""} />
      </MessageCont>
      <ButtonCont>
        {change ? (
          <Button onClick={handlePost} color="blue">
            저장
          </Button>
        ) : (
          <Button className="disabled" color="grey">
            정보 수정
          </Button>
        )}
      </ButtonCont>
    </MyPageUserInfoBody>
  );
};

const getPostUserInfoData = ({ inputRefs, defaultValues }: { inputRefs: any[]; defaultValues: Partial<routingType> }) => {
  return Object.entries(defaultValues).reduce((acc, [key, defaultValue], idx) => {
    const inputValue = inputRefs[idx].current.value;
    let postKey = "";
    if (key === "userDepartment") postKey = "department";
    if (key === "userMessage") postKey = "description";
    if (key === "userName") postKey = "nickname";
    if (key === "userNickName") postKey = "userName";
    if (key === "userStudentCode") postKey = "schoolCode";
    if (inputValue !== "") return { ...acc, [postKey]: inputValue };
    return { ...acc, [postKey]: defaultValue || "" };
  }, {});
};

export default InfoBody;
