import { createGlobalStyle } from 'styled-components/macro'
import openSans from './fonts/openSans.woff' 
import openSans2 from './fonts/openSans2.woff2'
import openSansBold from './fonts/openSansBold.woff' 
import openSansBold2 from './fonts/openSansBold2.woff2'

export default createGlobalStyle`

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
            url(${openSans2}) format('woff2'), 
            url(${openSans}) format('woff'); 
    }

    @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        src: local(''),
            url(${openSansBold2}) format('woff2'), 
            url(${openSansBold}) format('woff'); 
    }

    :root {
        --primaryFont: #3d3d3d;
        --secondaryFont: #fff;
        --footerBackground: #000;
    }

    * {
        box-sizing: conten-box;
    }

    body,html {
        margin: 0;
        padding: 0;
        width: 100%;
        font-family: 'Open Sans';
        background: linear-gradient(180deg, #fff, #437274);
        min-height: 100%;
        color: var(--primaryFont);
    }

`