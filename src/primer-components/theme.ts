// import {black, white, gray, blue, green, orange, purple, red, yellow} from 'primer-colors'


const black = "#1b1f23";
const white = "#fff";
const gray = ["#fafbfc", "#f6f8fa", "#e1e4e8", "#d1d5da", "#959da5", "#6a737d", "#586069", "#444d56", "#2f363d", "#24292e"];
const blue = ["#f1f8ff", "#dbedff", "#c8e1ff", "#79b8ff", "#2188ff", "#0366d6", "#005cc5", "#044289", "#032f62", "#05264c"];
const green = ["#f0fff4", "#dcffe4", "#bef5cb", "#85e89d", "#34d058", "#28a745", "#22863a", "#176f2c", "#165c26", "#144620"];
const yellow = ["#fffdef", "#fffbdd", "#fff5b1", "#ffea7f", "#ffdf5d", "#ffd33d", "#f9c513", "#dbab09", "#b08800", "#735c0f"];
const orange = ["#fff8f2", "#ffebda", "#ffd1ac", "#ffab70", "#fb8532", "#f66a0a", "#e36209", "#d15704", "#c24e00", "#a04100"];
const red = ["#ffeef0", "#ffdce0", "#fdaeb7", "#f97583", "#ea4a5a", "#d73a49", "#cb2431", "#b31d28", "#9e1c23", "#86181d"];
const purple = ["#f5f0ff", "#e6dcfd", "#d1bcf9", "#b392f0", "#8a63d2", "#6f42c1", "#5a32a3", "#4c2889", "#3a1d6e", "#29134e"];

// import {fontSizes, lineHeights} from 'primer-typography'

const colors = {
  bodytext: gray[9],
  black,
  white,
  gray,
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  blackfade35: 'rgba(27, 31, 35, 0.35)',
  blackfade50: 'rgba(27, 31, 35, 0.5)',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  state: {
    error: red[5],
    failure: red[5],
    pending: yellow[7],
    queued: yellow[7],
    success: green[5],
    unknown: gray[4]
  },
  button: {
    disabledColor: 'rgba(36, 41, 46, 0.4)',
    bg2: 'rgb(239, 243, 246)',
    border: 'rgba(27, 31, 35, 0.2)',
    focusShadow: 'rgba(3, 102, 214, 0.3)',
    activeBg: 'rgb(233, 236, 239)',
    hoverBg: 'rgb(230, 235, 241)',
    dangerActiveBg: 'rgb(181, 32, 44)',
    dangerFocusShadow: 'rgba(203, 36, 49, 0.4)',
    dangerHoverBgImage: 'rgb(222, 68, 80)',
    white: 'rgb(255, 255, 255)',
    outlineBlue: 'rgb(3, 102, 214)',
    outlineShadow: 'rgba(3, 102, 214, 0.4)',
    primaryBg: 'rgb(40, 167, 69)',
    primaryBgImage: 'rgb(52, 208, 88)',
    primaryHoverBg: 'rgb(38, 159, 66)',
    primaryHoverBgImage: 'rgb(47, 203, 83)',
    primaryBorder: 'rgba(27, 31, 35, 0.5)',
    primaryActiveBg: 'rgb(39, 159, 67)',
    primaryActiveShadow: 'rgba(27, 31, 35, 0.15)',
    primaryFocusShadow: 'rgba(52, 208, 88, 0.4)'
  },
  counter: {
    bg: 'rgba(27, 31, 35, 0.08)'
  },
  filterList: {
    hoverBg: '#eaecef'
  }
}

const theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px'
  },
  fonts: {
    normal: fontStack([
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol'
    ]),
    mono: fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 600
  },
  colors,
  borders: [0, '1px solid'],
  // fontSizes,
  // lineHeights,
  radii: [0, 3, 6],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128]
}

export default theme
export {colors}

function fontStack(fonts) {
  return fonts.map(font => (font.includes(' ') ? `"${font}"` : font)).join(', ')
}
