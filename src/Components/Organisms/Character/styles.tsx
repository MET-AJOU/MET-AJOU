import styled from "styled-components";

export const CharacterFormContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
export const CharacterFormTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.02em;

  color: #000000;
  margin-bottom: 20px;
`;

export const CharacterSelectContainer = styled.div`
  width: 730px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectPreviewContainer = styled.div`
  width: 200px;
  height: 270px;
`;
