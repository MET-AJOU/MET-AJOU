import styled from "styled-components";

export const VoiceContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  left: calc(5vh + 433px);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    div div {
      padding: 5px;
    }
  }
`;
