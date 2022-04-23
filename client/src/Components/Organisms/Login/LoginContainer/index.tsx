// import LoginForm from "@Organisms/Login";
import { ModalContainer, ModalLogo, ModalTitle, ModalDescription } from "@Templates/SelectMode/styles";
import React from "react";
import { ChildrenContainer, FooterContainer } from "./styles";
import useLineMove from "./useLineMove";

const LoginContainer = ({ children, title }: { children: React.ReactElement; title: string }) => {
  const [imgRef1, imgRef2] = useLineMove();
  return (
    <ModalContainer>
      <ModalLogo src="/asset/StartModal/ModalLogo.png" alt="모달로고" width="150px" />
      <ModalTitle>MET:AJOU에 방문해주셔서 감사합니다!</ModalTitle>
      <ModalDescription>{title}</ModalDescription>
      <ChildrenContainer>{children}</ChildrenContainer>
      <FooterContainer>
        <img className="show" src="/asset/Login/Container/line1.png" alt="물결1" ref={imgRef1} />
        <img src="/asset/Login/Container/line2.png" alt="물결2" ref={imgRef2} />
      </FooterContainer>
    </ModalContainer>
  );
};

export default LoginContainer;
