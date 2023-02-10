import styled, { css } from "styled-components";

const SelectStyle = css`
  border: 3px solid #6096fd;
  box-shadow: 0px 0px 20px rgba(96, 150, 253, 0.3);
`;

export const SelectColorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px auto;
  width: 140px;
  height: 35px;
`;
export const SelectColorItemContainer = styled.div<SelectColorItemContainerType>`
  ${({ select }) => select && SelectStyle}
  background-color:  ${(props) => props.color};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

export interface SelectColorItemContainerType {
  select: boolean;
  color: string;
}
