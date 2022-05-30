import styled from "styled-components";

export const MyPageModalContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 80%;
  border-radius: 20px;
  background-color: #ffffff;
  background-image: url("./asset/MapOption/Modal/myPageModal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const MyPageModalTitle = styled.h1`
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 44px;
  padding: 10% 0 0 10%;
  color: #000000;
`;

export const MyPageBodyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MyPageSelectPreviewContainer = styled.div`
  position: relative;
  left: 0;
  top: 17%;
  width: 300px;
  height: 400px;
`;

export const MyPageCharacterChangeButton = styled.div`
  cursor: pointer;
  background: #6096fd;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  color: #ffffff;

  width: 120px;
  position: absolute;
  bottom: 5px;
  left: 90px;
`;
export const MyPageSelectButton = styled.div`
  width: 130px;
  margin-top: 17px;
  cursor: pointer;
  background: #6096fd;
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  color: #ffffff;
  z-index: 1;
`;
export const MyPageUserInfoContainer = styled.div``;

export const MyPageUserInfoHeader = styled.div`
  width: 300px;
  height: 50px;
  background: #ebf1ff;
  border: 1px solid #c5c9d1;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPageUserInfoBody = styled.div`
  background: #ffffff;
  border: 1px solid #c5c9d1;
  border-radius: 0px 0px 12px 12px;
  width: 300px;
  height: 350px;
`;

export const InfoRow = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
`;
