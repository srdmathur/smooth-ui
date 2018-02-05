import { injectGlobal } from 'styled-components'
import { transparentize, lighten } from 'polished'

/* eslint-disable no-unused-expressions */
injectGlobal`
  [class^='sui-'], [class*=' sui-'] {
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

    * {
      box-sizing: border-box;
    }
  }
`
/* eslint-enable no-unused-expressions */

const primaryColor = '#bd4932'
const secondaryColor = '#063855'
const accentColor = '#46AFBD'
const grayLightColor = '#f6f6f6'
const grayDarkColor = '#aaa'
const grayDarkerColor = '#333'

export default {
  colors: {
    primary: primaryColor,
    primaryLight: lighten(0.3, primaryColor),
    secondary: secondaryColor,
    secondaryLight: '#E6EBEE',
    accent: accentColor,
    grayLight: '#f6f6f6',
    gray: '#cfcfcf',
    grayDark: grayDarkColor,
    grayDarker: grayDarkerColor,
    layoutBorderColor: transparentize(0.9, primaryColor),
    controlText: grayDarkerColor,
    controlBorder: '#d7d7d7',
    controlBorderFocus: '#515355',
    disabledControl: transparentize(0.95, primaryColor),
    disabledControlBg: grayLightColor,
    disabledControlText: grayDarkColor,
    placeholder: grayDarkColor,
    white: '#fff',
  },
  borderRadius: {
    sm: '.2rem',
    md: '.25rem',
    lg: '.3rem',
  },
  controlFontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
  },
  textControlPadding: {
    sm: '0.25rem 0.5rem',
    md: '0.375rem 0.75rem',
    lg: '0.5rem 1rem',
  },
  transition: {
    time: '300ms',
  },
  mixins: {
    controlFocus: `
      outline: 0;
      box-shadow: 0 0 2px ${transparentize(0.1, primaryColor)};
    `,
  },
  zIndexes: {
    control: 1,
    innerSwitch: 10,
  },
  breakPoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}