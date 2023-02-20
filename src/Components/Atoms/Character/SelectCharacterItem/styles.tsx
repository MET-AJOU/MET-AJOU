import styled, { css } from "styled-components";

export const SelectStyle = css`
  border: 3px solid #6096fd;
  border-radius: 12px;
  filter: drop-shadow(0px 0px 20px rgba(96, 150, 253, 0.3));
`;

export const NonSelectStyle = css`
  filter: grayscale(100%);
`;

export const SelectCharacterItemContainer = styled.div<CharacterItemType>`
  width: 65px;
  height: 63px;
  box-sizing: border-box;
  cursor: pointer;
  ${({ select }) => select && SelectStyle}
  ${({ select }) => !select && NonSelectStyle}
  img {
    width: 100%;
    height: 100%;
  }
`;

interface CharacterItemType {
  select: boolean;
}
