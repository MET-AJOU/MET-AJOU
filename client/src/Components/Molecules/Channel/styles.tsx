import styled from "styled-components";

export const ChannelItemBox = styled.div`
  width: 200px;
  height: 250px;
  background: #c4c4c4;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  cursor: pointer;
`;

export const ChannelItemImgContainer = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 12px 12px 0px 0px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 229.69%;
    /* identical to box height, or 28px */

    text-align: center;

    color: #ffffff;
  }
`;

export const ChannelItemTitleContainer = styled.div`
  width: 100%;
  height: 20%;
  background: rgba(96, 150, 253, 0.5);
  border-radius: 0px 0px 12px 12px;

  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 229.69%;
  /* identical to box height, or 37px */

  text-align: center;

  color: #ffffff;
`;
