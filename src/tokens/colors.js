// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  lightYellow: '#f9e892',
  blueGreyed: '#546c77',
  darkBlue: '#022a4b',
  beige: '#fff9d9',
  red: '#ff0000',
  yellow: '#ffdc4e',
  black: '#161a1d',
  white: '#f5f3f4',

  lightBackground: '#f6f6f6',
  lightWrapperBackground: '#ffe2e2',
  lightSecondaryWrapperBackground: '#fff1f1',
  lightFontColour: '#1e2022',
  lightSecondaryFontColour: '#5b2929',
  lighth5: '#922020',
  lightLinkHashtag: '#0077b6',
  lightTime: '#14746f',

  darkBackground: '#1e2022',
  darkWrapperBackground: '#52616b',
  darkSecondaryWrapperBackground: '#7c7f88',
  darkFontColour: '#f5f3f4',
  darkSecondaryFontColour: '#d3d3d3',
  darkh5: '#aaaaaa',
  darkLinkHashtag: '#48cae4',
  darkTime: '#88d4ab'
}

export const COLORS = {
  ...colors,
  // Font colour for the text
  text: {
    light: colors.lightFontColour,
    dark: colors.darkFontColour,
  },
  // The tags below the main h2 and minutes read section
  textSecondary: {
    light: colors.lightSecondaryFontColour,
    dark: colors.darkSecondaryFontColour,
  },
  // Background outside wrapper
  siteBackground: {
    light: colors.lightBackground,
    dark: colors.darkBackground,
  },
  // Main wrapper background
  wrapperBackground: {
    light: colors.lightWrapperBackground,
    dark: colors.darkWrapperBackground,
  },
  // The wrapper text below
  secondaryContentBackground: {
    light: colors.lightSecondaryWrapperBackground,
    dark: colors.darkSecondaryWrapperBackground,
  },
  wrapperShadow: {
    light: '#0000001a',
    dark: '#00000000',
  },
  // The footer colour
  primary: {
    light: colors.grey500,
    dark: colors.grey500,
  },
  primaryAlpha: {
    light: 'rgba(32, 35, 42, 0.85)',
    dark: 'rgba(32, 35, 42, 0.85)',
  },
  // Colour for the link and the hashtags
  secondary: {
    light: colors.lightLinkHashtag,
    dark: colors.darkLinkHashtag,
  },
  // Colour for reading time and date
  tertiary: {
    light: colors.lightTime,
    dark: colors.darkTime,
  },
  // Colour for h2 heading
  h2: {
    light: colors.grey500,
    dark: colors.yellow,
  },
  // Colour for h5 heading
  h5: {
    light: colors.lighth5,
    dark: colors.darkh5,
  },
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
