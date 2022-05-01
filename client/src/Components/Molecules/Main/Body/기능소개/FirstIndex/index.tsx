import InfoCard from "@Atoms/InfoCard";
import { MAIN_INFO_DATA } from "@Constant/.";
import React from "react";
import { Container, GridContainer } from "./styles";

const FirstIndex = () => {
  return (
    <Container>
      <GridContainer>
        {MAIN_INFO_DATA.map(({ Element, text }) => (
          <InfoCard Element={Element} text={text} />
        ))}
      </GridContainer>
    </Container>
  );
};

export default React.memo(FirstIndex);
