/* eslint-disable @typescript-eslint/no-unused-vars */
import { GET_VERIFY_EMAIL, CHECK_VERIFY_EMAIL } from "@Constant/URL";
import LoginContainer from "@Organisms/Login/LoginContainer";
import { FooterContainer } from "@Organisms/Login/LoginContainer/styles";
import useLineMove from "@Organisms/Login/LoginContainer/useLineMove";
import RegisterInputForm from "@Organisms/Register";
import axios from "axios";
import { useRef } from "react";

const RegisterTemplate = () => {
  const [imgRef1, imgRef2] = useLineMove();
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyRef = useRef<HTMLInputElement>(null);
  const handleVerifyEmail = async () => {
    if (!emailRef.current) return;

    const res = await axios.post(
      GET_VERIFY_EMAIL,
      {
        AjouUserId: emailRef.current.value,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
  };

  const handleCheckVerify = async () => {
    if (!verifyRef.current) return;

    const res = await axios.post(
      CHECK_VERIFY_EMAIL,
      {
        VerifyToken: verifyRef.current.value,
      },
      {
        withCredentials: true,
      }
    );

    console.log(res);
  };
  return (
    <LoginContainer>
      <RegisterInputForm />
      <FooterContainer>
        <img className="show" src="/asset/Login/Container/line1.png" alt="물결1" ref={imgRef1} />
        <img src="/asset/Login/Container/line2.png" alt="물결2" ref={imgRef2} />
      </FooterContainer>
    </LoginContainer>
  );
};
export default RegisterTemplate;
