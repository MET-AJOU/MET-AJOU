import { FlexColumnStyle } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 60vh;
  ${FlexColumnStyle}
  align-items: center;
  margin: auto;
  margin-top: 40vh;
  .moon1 {
    position: relative;
    left: -45vw;
    top: 30vh;
    animation: moon_move_up 11s infinite;
    -webkit-animation: moon_move_up 11s infinite;
  }
  .moon2 {
    position: relative;
    left: -20vw;
    top: 50vh;
    animation: moon_move_up 14s infinite;
    -webkit-animation: moon_move_up 14s infinite;
  }
  .moon3 {
    position: relative;
    left: 20vw;
    top: -50vh;
    animation: moon_move_down 12s infinite;
    -webkit-animation: moon_move_down 12s infinite;
  }
  .moon4 {
    position: relative;
    left: 30vw;
    top: -30vh;
    animation: moon_move_up 10s infinite;
    -webkit-animation: moon_move_up 10s infinite;
  }
  .moon5 {
    position: relative;
    left: -10vw;
    top: -80vh;
    animation: moon_move_down 8s infinite;
    -webkit-animation: moon_move_down 8s infinite;
  }
  .moon6 {
    position: relative;
    left: 40vw;
    top: -70vh;
    animation: moon_move_up 9s infinite;
    -webkit-animation: moon_move_up 9s infinite;
  }
`;
