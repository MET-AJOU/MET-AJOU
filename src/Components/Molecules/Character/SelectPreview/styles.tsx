import styled from "styled-components";

export const SelectPreviewContainer = styled.div`
  background: #dee7ff;
  border: 1.5px solid rgba(161, 161, 161, 0.3);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 200px;
  height: 270px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const SelectPreviewFloor = styled.img`
  width: 80%;
  margin: 0 auto;
`;

export const SelectPreviewBg = styled.img`
  position: absolute;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 75%;
`;
