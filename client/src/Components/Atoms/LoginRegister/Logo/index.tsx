import { ModalLogoContainer } from "./styles";

const ModalLogo = ({ src }: { src: string }) => {
  return <ModalLogoContainer src={src} alt="모달로고" width="150px" />;
};

export default ModalLogo;
