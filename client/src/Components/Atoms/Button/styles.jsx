import styled from "styled-components";

const ButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${({ backGroundColor }) => backGroundColor};
  cursor: pointer;
`;

const LoginContainer = styled(ButtonContainer)`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => radius};
`;

export { ButtonContainer, LoginContainer };
