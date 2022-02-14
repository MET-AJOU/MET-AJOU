import LoginForm from "@Organisms/Login";
import { BackGround, Container } from "./styles";

const LoginTemplate = () => {
    return (
        <Container>
            <BackGround />
            <LoginForm />
        </Container>
    );
};

export default LoginTemplate;
