import styled from "styled-components";

export const MapOptionImgContainer = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const MapOptionTextContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 5px;
  display: inline-block;
  margin: 10px 0;
  cursor: pointer;
  font-size: 14px;
`;

export const MapOptionAtomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

export const MiniMapContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 5vh;
`;
