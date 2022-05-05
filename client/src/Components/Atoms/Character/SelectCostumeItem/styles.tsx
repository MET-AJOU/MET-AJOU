import styled from "styled-components";
import { SelectStyle, NonSelectStyle } from "../SelectCharacterItem/styles";

export const SelectCostumeItemContainer = styled.div<CharacterItemType>`
  width: 90px;
  height: 90px;
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
