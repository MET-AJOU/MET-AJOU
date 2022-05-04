import { FlexColumnStyle } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  ${FlexColumnStyle}
  height: 100%;
  width: 22%;
  border-radius: 16px;
  background: #ffffff;
  align-items: center;
  transition: 1s;
  position: relative;
  top: 0;
`;
export const Img = styled.img`
  width: 40%;
  margin-top: 35%;
`;
export const Title = styled.span`
  margin-top: 15%;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const TextContainer = styled.div`
  text-align: center;
  margin-top: 15%;
`;
export const Text = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 20px;
`;
