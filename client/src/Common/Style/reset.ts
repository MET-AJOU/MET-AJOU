import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    text-decoration: none;
    color: #000000;
    font-family: 'NanumBarunGothic';
  }
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  body{
    overflow-x:hidden;
  }
`;
export default GlobalStyle;
