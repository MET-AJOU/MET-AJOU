import { GET_VERIFY_EMAIL, CHECK_VERIFY_EMAIL } from "@Constant/URL";
import axios from "axios";
import { useRef } from "react";

const RegisterTemplate = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyRef = useRef<HTMLInputElement>(null);
  const handleVerifyEmail = async () => {
    if (!emailRef.current) return;

    // const res1 = await axios.get(CHECK_EXPIRED, { withCredentials: true });

    const res = await axios.post(
      GET_VERIFY_EMAIL,
      {
        AjouUserId: emailRef.current.value,
      },
      {
        withCredentials: true,
      }
    );
    // console.log(res1);
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
    <>
      <input placeholder="email" ref={emailRef} />
      <span>@ajou.ac.kr</span>
      <br />
      <button type="submit" onClick={handleVerifyEmail}>
        이메일 인증
      </button>
      <br />
      <input placeholder="인증 번호" ref={verifyRef} />
      <br />
      <button type="submit" onClick={handleCheckVerify}>
        인증번호 확인
      </button>
    </>
  );
};
export default RegisterTemplate;
