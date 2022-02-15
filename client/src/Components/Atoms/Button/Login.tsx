import { LoginContainer } from "./styles";

interface Props {
  title: string;
  onClick: () => void;
}

const LoginButton = (props: Props) => {
  const { title } = props;
  return <LoginContainer {...props}>{title}</LoginContainer>;
};

export default LoginButton;
