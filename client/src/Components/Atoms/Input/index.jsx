import Container from "./styles";

const Input = (props) => {
  const { inputRef } = props;
  return <Container {...props} ref={inputRef} />;
};

export default Input;
