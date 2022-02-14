import { ButtonContainer } from "./styles";

const Button = (props) => {
  const { title } = props;
  return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

export default Button;
