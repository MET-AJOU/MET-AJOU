import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
`;

export const GridContainer = styled.div`
  width: 60vw;
  height: 85%;
  margin: auto;
  margin-top: 15vh;
  display: grid;

  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1vw;
  column-gap: 1vw;
`;
