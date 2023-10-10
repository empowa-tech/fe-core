import * as TOKENS from '../../dist/js/index'
import { createBreakpoints } from '@mui/system'

enum Theme {
  main = 'MAIN',
  mainDark = 'MAIN_DARK',
  mainLight = 'MAIN_LIGHT',
}

const customBreakpointValues = {
  values: {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1440,
  },
}

const breakpoints = createBreakpoints({ ...customBreakpointValues })

const mainThemePalette = {
  grey: {
    50: TOKENS.Grey50,
    100: TOKENS.Grey100,
    200: TOKENS.Grey200,
    300: TOKENS.Grey300,
    400: TOKENS.Grey400,
    500: TOKENS.Grey500,
    600: TOKENS.Grey600,
    700: TOKENS.Grey700,
    800: TOKENS.Grey800,
    900: TOKENS.Grey900,
  },
  brand: {
    paper: TOKENS.BrandPaper,
    orange: TOKENS.BrandOrange,
    darkBrown: TOKENS.BrandDarkBrown,
    purple: TOKENS.BrandPurple,
    darkBlue: TOKENS.BrandDarkBlue,
    darkOrange: TOKENS.BrandDarkOrange,
    red: TOKENS.BrandRed,
    blue: TOKENS.BrandBlue,
    gold: TOKENS.BrandGold,
  },
  shadows: {
    4: '0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  },
}

const mainThemeLightPalette = {
  ...mainThemePalette,
  mode: 'light',
  primary: {
    main: TOKENS.LightPrimaryMain,
    dark: TOKENS.LightPrimaryDark,
    light: TOKENS.LightPrimaryLight,
    contrastText: TOKENS.LightPrimaryContrast,
  },
  secondary: {
    main: TOKENS.LightSecondaryMain,
    dark: TOKENS.LightSecondaryDark,
    light: TOKENS.LightSecondaryLight,
    contrastText: TOKENS.LightSecondaryContrast,
  },
  error: {
    main: TOKENS.LightErrorMain,
    light: TOKENS.LightErrorLight,
    dark: TOKENS.LightErrorDark,
    contrastText: TOKENS.LightErrorContrast,
  },
  warning: {
    main: TOKENS.LightWarningMain,
    light: TOKENS.LightWarningLight,
    dark: TOKENS.LightWarningDark,
    contrastText: TOKENS.LightWarningContrast,
  },
  info: {
    main: TOKENS.LightInfoMain,
    light: TOKENS.LightInfoLight,
    dark: TOKENS.LightInfoDark,
    contrastText: TOKENS.LightInfoContrast,
  },
  success: {
    main: TOKENS.LightSuccessMain,
    light: TOKENS.LightSuccessLight,
    dark: TOKENS.LightSuccessDark,
    contrastText: TOKENS.LightSuccessContrast,
  },
  action: {
    hover: TOKENS.LightActionHover4p,
    selected: TOKENS.LightActionSelected8p,
    disabledBackground: TOKENS.LightActionDisabledBackground12p,
    focus: TOKENS.LightActionFocus12p,
    disabled: TOKENS.LightActionDisabled26p,
    active: TOKENS.LightActionActive54p,
  },
  text: {
    primary: TOKENS.LightTextPrimary,
    secondary: TOKENS.LightTextSecondary,
    disabled: TOKENS.LightTextDisabled,
  },
  background: {
    paper: TOKENS.LightBackgroundPaper,
    default: TOKENS.LightBackgroundDefault,
  },
  divider: TOKENS.LightOtherDivider,
}

const mainThemeDarkPalette = {
  ...mainThemePalette,
  mode: 'dark',
  primary: {
    main: TOKENS.DarkPrimaryMain,
    dark: TOKENS.DarkPrimaryDark,
    light: TOKENS.DarkPrimaryLight,
    contrastText: TOKENS.DarkPrimaryContrast,
  },
  secondary: {
    main: TOKENS.DarkSecondaryMain,
    dark: TOKENS.DarkSecondaryDark,
    light: TOKENS.DarkSecondaryLight,
    contrastText: TOKENS.DarkSecondaryContrast,
  },
  error: {
    main: TOKENS.DarkErrorMain,
    light: TOKENS.DarkErrorLight,
    dark: TOKENS.DarkErrorDark,
    contrastText: TOKENS.DarkErrorContrast,
  },
  warning: {
    main: TOKENS.DarkWarningMain,
    light: TOKENS.DarkWarningLight,
    dark: TOKENS.DarkWarningDark,
    contrastText: TOKENS.DarkWarningContrast,
  },
  info: {
    main: TOKENS.DarkInfoMain,
    light: TOKENS.DarkInfoLight,
    dark: TOKENS.DarkInfoDark,
    contrastText: TOKENS.DarkInfoContrast,
  },
  success: {
    main: TOKENS.DarkSuccessMain,
    light: TOKENS.DarkSuccessLight,
    dark: TOKENS.DarkSuccessDark,
    contrastText: TOKENS.DarkSuccessContrast,
  },
  action: {
    hover: TOKENS.DarkActionHover8p,
    selected: TOKENS.DarkActionSelected16p,
    disabledBackground: TOKENS.DarkActionDisabledBackground12p,
    focus: TOKENS.DarkActionFocus12p,
    disabled: TOKENS.DarkActionDisabled30p,
    active: TOKENS.DarkActionActive56p,
  },
  text: {
    primary: TOKENS.DarkTextPrimary,
    secondary: TOKENS.DarkTextSecondary,
    disabled: TOKENS.DarkTextDisabled,
  },
  background: {
    paper: TOKENS.DarkBackgroundPaper,
    default: TOKENS.DarkBackgroundDefault,
  },
  divider: TOKENS.DarkOtherDivider,
}

/**
 * Theme creator for the Material UI
 * use this to overwrite global styles and minimize a need for overwriting styles.
 * https://material-ui.com/customization/theming/
 *
 */
export const mainThemeConfig = {
  themeName: Theme.main,
  palette: mainThemeDarkPalette,
  spacing: (factor: number): string => 0.5 * factor + 'rem',
  breakpoints: {
    ...customBreakpointValues,
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontSize: 16,
    fontFamily: [TOKENS.FontFamiliesSourceSansPro, 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightMediumBold: 600,
    fontWeightBold: 700,
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    body3: {
      fontSize: '12px',
    },
    heading: {
      fontFamily: TOKENS.FontFamiliesRaleway,
      fontSize: `${TOKENS.FontSize8}`,
      fontWeight: 400,
    },
    subHeading: {
      fontFamily: TOKENS.FontFamiliesRaleway,
      fontSize: `${TOKENS.FontSize6}`,
      fontWeight: 500,
    },
    h1: {
      fontFamily: TOKENS.TypographyH1.fontFamily,
      fontSize: TOKENS.TypographyH1.fontSize,
      fontWeight: TOKENS.TypographyH1.fontWeight,
      lineHeight: TOKENS.TypographyH1.lineHeight,
    },
    h2: {
      fontFamily: TOKENS.TypographyH2.fontFamily,
      fontSize: TOKENS.TypographyH2.fontSize,
      fontWeight: TOKENS.TypographyH2.fontWeight,
      lineHeight: TOKENS.TypographyH2.lineHeight,
    },
    h3: {
      fontFamily: TOKENS.TypographyH3.fontFamily,
      fontSize: TOKENS.TypographyH3.fontSize,
      fontWeight: TOKENS.TypographyH3.fontWeight,
      lineHeight: TOKENS.TypographyH3.lineHeight,
    },
    h4: {
      fontFamily: TOKENS.TypographyH4.fontFamily,
      fontSize: TOKENS.TypographyH4.fontSize,
      fontWeight: TOKENS.TypographyH4.fontWeight,
      lineHeight: TOKENS.TypographyH4.lineHeight,
    },
    h5: {
      fontFamily: TOKENS.TypographyH5.fontFamily,
      fontSize: TOKENS.TypographyH5.fontSize,
      fontWeight: TOKENS.TypographyH5.fontWeight,
      lineHeight: TOKENS.TypographyH5.lineHeight,
    },
    h6: {
      fontFamily: TOKENS.TypographyH6.fontFamily,
      fontSize: TOKENS.TypographyH6.fontSize,
      fontWeight: TOKENS.TypographyH6.fontWeight,
      lineHeight: TOKENS.TypographyH6.lineHeight,
    },
    button: {
      fontFamily: TOKENS.FontFamiliesSourceSansPro,
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    // Name of the component
    MuiContainer: {
      styleOverrides: {
        root: {
          [breakpoints.up('lg')]: {
            paddingLeft: '64px',
            paddingRight: '64px',
          },
          [breakpoints.up('xl')]: {
            maxWidth: breakpoints.values.xl,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: '2px',
        },
      },
    },
  },
}

const mainThemeLightConfig = {
  ...mainThemeConfig,
  // overwrites
  themeName: Theme.mainLight,
  palette: mainThemeLightPalette,
}

const mainThemeDarkConfig = {
  ...mainThemeConfig,
  // overwrites
  themeName: Theme.mainDark,
  palette: mainThemeDarkPalette,
}

export { mainThemeLightConfig, mainThemeDarkConfig }

export default mainThemeConfig
