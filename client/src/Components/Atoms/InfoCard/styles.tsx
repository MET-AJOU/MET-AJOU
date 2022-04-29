import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: auto;
  box-shadow: inset 20px 20px 10px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 24px;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  .up {
    position: relative;
    top: 0px;
    opacity: 1;
    transition: 1s;
  }
  .down {
    position: absolute;
    top: 200px;
    opacity: 0;
  }
`;
