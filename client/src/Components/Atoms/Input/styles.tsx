import { BasicInputProps } from "@Type/.";
import styled from "styled-components";

const Container = styled.input<BasicInputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: 1px solid ${({ borderColor }) => borderColor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default Container;
