'use client'
export const theme = {
  font1: 'Roboto_Mono',
  font2: 'Nunito',
  fontSize: '16px',
  wrapperXs: '360px',
  wrapperSm: '576px',
  wrapperMd: '768px',
  wrapperLg: '1240px',
  wrapperXl: '1440px',
  wrapperXxl: '1920px',
  wrapperXxx: '2670px',

  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ededed',
    grayLight: '#EBEBEB',
    grayDark: '#362e2e',
    grayLine: '#D9D9D9',
    gray: '#b6b4b4',
    blueDark: '#153060',
    red: '#882323',
    green: '#2b6442',
    greenLight: '#4eb36d',
    primary: '#693169',
    primaryHover: '#491149',
    borderBottom: '1px solid #2770f0',
    boxShadow: '0 34px 24px 0 #00000017',
  },

  gap: {
    xxs: '4px',
    xs: '8px',
    sm: '16px',
    smd: '24px',
    md: '32px',
    mdm: '40px',
    mdl: '36px',
    mdx: '52px',
    lg: '64px',
    xl: '72px',
    xxl: '128px',
  },

  divider: {
    top: 'inset 0px 1px 0px #d9dadd',
  },
} as const;
