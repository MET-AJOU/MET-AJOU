import styled, { css } from "styled-components";

export const SelectEquipContainer = styled.div`
  background: #ffffff;
  border: 1.5px solid rgba(161, 161, 161, 0.3);
  border-radius: 12px;
  padding: 32px 0;
  box-sizing: border-box;
  width: 350px;
  height: 270px;
`;

export const SelectEquipTitleContainer = styled.div`
  border-bottom: 1px solid rgba(161, 161, 161, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
`;

export const SeletEqupTitle = styled.div<TitleType>`
  background: #ffffff;
  border: 1px solid #c4c4c4;
  text-align: center;
  box-sizing: border-box;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ select }) => select && SelectStyle}
  ${({ dir }) => dir === "left" && leftStyle}
  ${({ dir }) => dir === "right" && rightStyle}
`;

const SelectStyle = css`
  border: 2.5px solid #6096fd;
`;

const leftStyle = css`
  border-radius: 8px 0px 0px 8px;
`;
const rightStyle = css`
  border-radius: 0px 8px 8px 0px;
`;

interface TitleType {
  select: boolean;
  dir: "left" | "right";
}
