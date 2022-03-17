// import { useState } from "react";
import MainHeader from "@Organisms/Main/Header";
import MainBody from "@Organisms/Main/Body";
import MainFooter from "@Organisms/Main/Footer";
// import MainModal from "@Organisms/Main/Modal";

const MainTemplate = () => {
  // const [modal, setModal] = useState(false);

  return (
    <>
      <MainHeader />
      <MainBody />
      <MainFooter />
      {/* {modal && <MainModal />} */}
    </>
  );
};

export default MainTemplate;
