import { CHECK_EXPIRED, VERIFY_EMAIL } from "@Constant/URL";
import axios from "axios";
import { useRef } from "react";

const RegisterTemplate = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const handleVerifyEmail = async () => {
    if (!emailRef.current) return;

    const res1 = await axios.get(CHECK_EXPIRED, { withCredentials: true });

    const res = await axios.post(
      VERIFY_EMAIL,
      {
        AjouUserId: emailRef.current.value,
      }
      // {
      //   withCredentials: true,
      // }
    );
    console.log(res1);
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
    </>
  );
};
export default RegisterTemplate;
