import styled from "styled-components";

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  top: 200px;
  left: 35%;
  box-shadow: 0px 0px 50px #00000029;
  border-radius: 28px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export { ModalContainer, ItemContainer };
