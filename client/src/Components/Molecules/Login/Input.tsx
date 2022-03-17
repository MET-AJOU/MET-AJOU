/* eslint-disable react/button-has-type */
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@Atoms/Input";
import { LoginInputType } from "@Atoms/Input/Type";

import { InputContainer, Title } from "./styles";

const LoginInput = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (!idRef?.current || !pwRef?.current) return;

    const {
      current: { value: idValue },
    } = idRef;

    const {
      current: { value: pwValue },
    } = pwRef;

    navigate("/map");
    console.log(idValue, pwValue);
  };

  return (
    <InputContainer>
      <Title>아주대학교 통합인증</Title>
      <Input {...LoginInputType} placeholder="사용자 ID를 입력해주세요." inputRef={idRef} />
      <Input {...LoginInputType} placeholder="비밀번호를 입력해주세요." type="password" inputRef={pwRef} />
      <button onClick={handleLoginClick}>로그인</button>
    </InputContainer>
  );
};

export default LoginInput;
