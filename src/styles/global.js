import { createGlobalStyle } from 'styled-components'
import { above } from './mixins'
import { fonts, typography } from './variables'
import fontFiles from './fonts'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TT Firs Neue Medium';
    src: local('TT Firs Neue'),
        url('${fontFiles.TTFirsNeueMediumEOT}?#iefix') format('embedded-opentype'),
        url('${fontFiles.TTFirsNeueMediumWOFF2}') format('woff2'),
        url('${fontFiles.TTFirsNeueMediumWOFF}') format('woff'),
        url('${fontFiles.TTFirsNeueMediumTTF}') format('truetype'),
        url('${fontFiles.TTFirsNeueMediumSVG}#youworkforthem') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'TT Firs Neue Light';
    src: local('TT Firs Neue'),
        url('${fontFiles.TTFirsNeueLightEOT}?#iefix') format('embedded-opentype'),
        url('${fontFiles.TTFirsNeueLightWOFF2}') format('woff2'),
        url('${fontFiles.TTFirsNeueLightWOFF}') format('woff'),
        url('${fontFiles.TTFirsNeueLightTTF}') format('truetype'),
        url('${fontFiles.TTFirsNeueLightSVG}#youworkforthem') format('svg');
    font-weight: 100;
    font-style: normal;
  }

  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}

  html {
    font-size: 10px;

    ${above.sm`
      font-size: 16px;
    `}
  }

  body {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    font-family: ${fonts.body};
    font-size: ${typography.body};
    font-weight: 300;
    letter-spacing: .05rem;
    line-height: 1.8;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: .2rem;
    line-height: 1.2;
    margin: 0 0 2rem;
  }

  ul {
    list-style-type: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  .text--underlined {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 7.5%;
      transform: translateX(-50%);
    }

    &-e,
    &-u {
      h1 & {
        &::after {
          border-bottom: 5px solid currentColor;
        }
      }

      h2 &, h3 &, h4 &, h5 &, h6 & {
        &::after {
          border-bottom: 2px solid currentColor;
        }
      }
    }

    &-e {
      h1 & {
        &::after {
          left: 52%;
          width: 84%;
        }
      }

      h2 &, h3 &, h4 &, h5 &, h6 & {
        &::after {
          left: 54%;
          width: 77%;
        }
      }
    }

    &-u {
      h1 & {
        &::after {
          left: 50%;
          width: 80%;
        }
      }

      h2 &, h3 &, h4 &, h5 &, h6 & {
        &::after {
          left: 50%;
          width: 80%;
        }
      }
    }
  }
`
