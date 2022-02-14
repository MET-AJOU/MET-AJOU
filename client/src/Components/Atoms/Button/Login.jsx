import { LoginContainer } from "./styles";

const LoginButton = (props) => {
  const { title } = props;
  return <LoginContainer {...props}>{title}</LoginContainer>;
};

export default LoginButton;
