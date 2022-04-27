import { InlineStyleType } from "@Type/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 500px;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  height: 200px;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 37px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

export const Heart1Style: InlineStyleType = {
  position: "relative",
  top: "-150px",
  left: "130px",
};

export const Heart2Style: InlineStyleType = {
  position: "relative",
  top: "-150px",
  left: "130px",
};

export const SeonGuStyle: InlineStyleType = {
  position: "relative",
  top: "50px",
  left: "150px",
};
