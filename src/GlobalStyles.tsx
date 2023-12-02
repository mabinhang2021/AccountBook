// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* 重置样式 */
  body, h1, h2, h3, h4, p, ul, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }
  html{
    font-size:14px;
  }

  /* 设置全局盒模型 */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
