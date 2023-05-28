import {
  amber,
  amberDark,
  blackA,
  blue,
  blueDark,
  bronze,
  bronzeDark,
  brown,
  brownDark,
  crimson,
  crimsonDark,
  cyan,
  cyanDark,
  gold,
  goldDark,
  grass,
  grassDark,
  gray,
  grayDark,
  green,
  greenDark,
  indigo,
  indigoDark,
  lime,
  limeDark,
  mauve,
  mauveDark,
  mint,
  mintDark,
  olive,
  oliveDark,
  orange,
  orangeDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  red,
  redDark,
  sage,
  sageDark,
  sand,
  sandDark,
  sky,
  skyDark,
  slate,
  slateDark,
  teal,
  tealDark,
  tomato,
  tomatoDark,
  violet,
  violetDark,
  whiteA,
  yellow,
  yellowDark,
} from '@radix-ui/colors';
import { createStitches, defaultThemeMap } from '@stitches/react';

/*
 * The "createStitches" function returns the following:
  ? styled: a function to create React components with styles.
  ? css: a function to create CSS rules.
  ? globalCss: a function to create global styles.
  ? keyframes: a function to create keyframes.
  ? theme: a function for accessing default theme data.
  ? createTheme: a function for creating additional themes.
  ? getCssText: a function to get styles as a string, useful for SSR.
  ? config: an object containing the hydrated config. 
*/
export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  //* Set up your design theme tokens. You can then use them in the style object.
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...orange,
      ...brown,
      ...sky,
      ...mint,
      ...lime,
      ...yellow,
      ...amber,
      ...bronze,
      ...gold,
      ...blackA,
      ...whiteA,
    },
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  //* Set up reusable breakpoints.
  media: {
    bp1: '(min-width: 640px)',
    toBp2: '(width <= 768px)',
  },
  //* Set up custom utils to improve your developer experience.
  utils: {
    // A property for applying width/height together
    size: value => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for background-color
    bg: value => ({
      backgroundColor: value,
    }),
  },
  //* Prefix all class names and CSS variables to avoid global clashes.
  prefix: 'radix',
  //* Define custom mapping of CSS properties to theme tokens.
  themeMap: {
    ...defaultThemeMap,
    //* Map these properties to the `space` scale
    width: 'space',
    height: 'space',
  },
});

//* A function to override the default theme passed into the createStitches function. It receives a theme object.
export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...orangeDark,
    ...brownDark,
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...bronzeDark,
    ...goldDark,
  },
});
