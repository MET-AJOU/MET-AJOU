import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PrivacyCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;

export const PrivacyDescription = styled.span`
  font-family: "NanumBarunGothic";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 229.69%;
`;

export const PrivacyDescriptionImpact = styled(PrivacyDescription)`
  color: #6096fd;
`;
