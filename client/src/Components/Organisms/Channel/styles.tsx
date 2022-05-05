import styled from "styled-components";

export const ChannelFormContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const ChannelFormTitle = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* or 150% */

  text-align: center;
  letter-spacing: 0.02em;

  margin-bottom: 20px;
`;

export const ChannelItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 850px;
  height: 250px;
  margin-bottom: 10px;
`;
