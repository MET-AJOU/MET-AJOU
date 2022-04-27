// import { useState } from "react";
import MainHeader from "@Organisms/Main/Header";
import MainBody from "@Organisms/Main/Body";
import MainFooter from "@Organisms/Main/Footer";
import { Container } from "./styles";
// import MainModal from "@Organisms/Main/Modal";

const MainTemplate = () => {
  return (
    <Container>
      <MainHeader />
      <MainBody />
      <MainFooter />
    </Container>
  );
};

export default MainTemplate;
