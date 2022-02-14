import { BasicInputProps } from "@Type/.";
import Container from "./styles";

const Input = (props: BasicInputProps) => {
    const { inputRef } = props;
    return <Container {...props} ref={inputRef} />;
};

export default Input;
