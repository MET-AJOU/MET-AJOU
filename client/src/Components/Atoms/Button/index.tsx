import { ButtonContainer } from "./styles";
import { ButtonProps } from "./Type";

interface Props extends ButtonProps {
    title: string;
    onClick: () => void;
}

const Button = (props: Props) => {
    const { title } = props;
    return <ButtonContainer {...props}>{title}</ButtonContainer>;
};

export default Button;
