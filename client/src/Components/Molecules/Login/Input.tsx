/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */
import { TEST_GOOGLE_URL } from "@Constant/URL";
import { InputContainer, Title } from "./styles";

const LoginInput = () => {
  const handleLoginClick = () => (window.location.href = TEST_GOOGLE_URL);
  // const handleLoginClick = () => (window.location.href = GOOGLE_URL);

  return (
    <InputContainer>
      <Title>로그인</Title>
      <button onClick={handleLoginClick}>구글 로그인</button>
    </InputContainer>
  );
};

export default LoginInput;
