import { css, Global } from '@emotion/react';

const reset = css`
  *, *:: after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    background-color: #ffffff;
    color: #000000eb;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    /**
     * iOS Safari doesn't respect the user-scalable=no meta tag since iOS 10
     * https://stackoverflow.com/questions/65100185/how-to-disable-all-zoom-on-mobile-safari
     */
    touch-action: pan-x pan-y;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none

    @media screen and (max-width: 768px) {
      min-width: 360px;
      font-size: 12px;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
   
    &:disabled {
      color: #8d949f;
      cursor: default;
    }
   
  }

  p,
  span {
    margin: 0;
    padding: 0;
  }

  video::-webkit-media-controls {
    display: none !important;
  }

  video::-webkit-media-controls-container {
    /**XXX: safari 안되고 있음 확인 필요 */
    display: none !important;
  }

  #control-overlay:fullscreen video {
    height: 100vh;
    width: 100vw;
  }

  @font-face {s
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const GlobalStyle = () => <Global styles={reset} />;

export default GlobalStyle;
