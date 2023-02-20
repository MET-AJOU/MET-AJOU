import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 20px;
  background-color: #ffffff;
  background-image: url("./asset/MapOption/Modal/MiniMap/MiniMap.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.p`
  position: relative;
  font-size: 38px;
  font-weight: 600;
  top: 7%;
  left: 5%;
`;

export const MapFrame = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;
  position: relative;
  left: 15%;
  top: 5%;
  width: 1000px;
  height: 563px;
  background-image: url("./asset/MapOption/Modal/MiniMap/MapFrame.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -3;
`;

export const Map = styled.div`
  position: relative;
  left: 15%;
  top: 12%;
  width: 421px;
  height: 421px;
  background-image: url("./asset/MapOption/Modal/MiniMap/Map.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
`;

export const Pins = styled.div`
  position: relative;
  left: 85px;
  top: 110px;
  width: 198px;
  height: 231px;
`;

export const BuildingInfoContainer = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-rows: 70px 483px;
`;

export const BuildingTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BuildingImg = styled.img`
  width: 60%;
  height: 40%;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding: 30px;
`;

export const BubbleContainer = styled.div`
  position: relative;
  width: 277px;
  height: 243px;
  left: 72px;
  top: -235px;
  z-index: 0;
  pointer-events: none;
`;
