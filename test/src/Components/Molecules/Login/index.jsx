import LoginInput from "./Input";
import { Container, Left, Right } from "./styles";

const LoginFormItem = () => {
  return (
    <>
      <Container>
        <Left />
      </Container>
      <Container>
        <Right>
          <LoginInput />
        </Right>
      </Container>
    </>
  );
};

export default LoginFormItem;
