import React from "react";
import { ChildrenContainer, FooterContainer, ModalContainer } from "./styles";
import useLineMove from "./useLineMove";

const LoginContainer = ({ children }: { children: React.ReactElement[] | React.ReactElement }) => {
  const [imgRef1, imgRef2] = useLineMove();
  return (
    <ModalContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
      <FooterContainer>
        <img className="show" src="/asset/Login/Container/line1.png" alt="물결1" ref={imgRef1} />
        <img src="/asset/Login/Container/line2.png" alt="물결2" ref={imgRef2} />
      </FooterContainer>
    </ModalContainer>
  );
};

export default LoginContainer;
