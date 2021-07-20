// @material-ui/core components
import { createMuiTheme } from "@material-ui/core/styles";
// core components
import boxShadows from "../theme/box-shadow";
import hexToRgb from "../theme/hex-to-rgb";
import themeColors from "../theme/colors";

// these are the default styles that go on all headings (h1,h2,h3,h4,h5,h6)
// the difference only consists in the font size and text transform
const defaultHeaderStyles = {
  fontFamily: "inherit",
  fontWeight: 600,
  lineHeight: 1.2,
  color: "#fff",
};

// A custom theme for this app
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1100,
      xl: 1920,
    },
  },
  palette: {
    ...themeColors,
    melody: {
      main: themeColors.primary.melody
    },
    buttonLightLabel: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
    sidebarLinks: {
      main: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.5)",
      dark: "rgba(" + hexToRgb(themeColors.black.main) + ", 0.9)",
    },
    adminNavbarSearch: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.6)",
    },
    authNavbarLink: {
      main: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.65)",
      dark: "rgba(" + hexToRgb(themeColors.white.main) + ", 0.95)",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      ...defaultHeaderStyles,
      fontSize: "3.438rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.25rem",
      ...defaultHeaderStyles,
    },
    h3: {
      ...defaultHeaderStyles,
      fontSize: "1.125rem",
      fontWeight: "400",
      marginBottom: ".875rem",
    },
    h4: {
      fontSize: ".9375rem",
      ...defaultHeaderStyles,
    },
    h5: {
      fontSize: ".8125rem",
      ...defaultHeaderStyles,
    },
    h6: {
      ...defaultHeaderStyles,
      fontSize: "1.375rem",
      fontWeight: "bold",
      color: "#8D6DC8",
    },
    body2: {
      fontSize: ".75rem",
      lineHeight: "20px",
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: "260px",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
      paperAnchorDockedLeft: {
        borderRight: "1px solid #424242",
        boxShadow: boxShadows.boxShadow + "!important",
      },
      docked: {
        width: "260px",
      },
    },
    MuiListItem: {
      root: {
        display: "flex",
        paddingTop: ".2rem",
        paddingBottom: ".2rem",
        color: "#6B6B6B",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "black",
        }
      },
      gutters: {
        paddingLeft: "2rem",
        paddingRight: ".75rem",
        paddingTop: ".7rem",
        paddingBottom: ".7rem",
        marginBottom: "1rem"
      },
      
    },
    MuiListItemIcon: {
      root: {
        color: "#6B6B6B",
      }
    },
    MuiMenu: {
      paper: {
        minWidth: "12rem",
        fontSize: "1rem",
        color: themeColors.gray[700],
        textAlign: "left",
        listStyle: "none",
        backgroundColor: themeColors.white.main,
        backgroundClip: "padding-box",
        border: "0 solid rgba(" + hexToRgb(themeColors.black.main) + ",.15)",
        borderRadius: ".4375rem",
        boxShadow: boxShadows.menuBoxShadow,
        padding: ".5rem 0",
      },
    },
    MuiMenuItem: {
      root: {
        padding: ".5rem 1rem",
        fontSize: ".875rem",
        display: "block",
        width: "100%",
        clear: "both",
        fontWeight: 400,
        color: themeColors.gray[900],
        textAlign: "inherit",
        whiteSpace: "nowrap",
        backgroundColor: "initial",
        border: 0,
        "& i": {
          marginRight: "1rem",
          fontSize: "1rem",
          verticalAlign: "-17%",
        },
        "&.Mui-selected": {
          backgroundColor: "#8D6DC8 !important"
        }
      },
    },
    MuiFormLabel: {
      root: {
        color: "#BDBDBD",
        fontSize: ".875rem",
        fontWeight: "600",
        display: "inline-block",
      },
    },
    MuiFormGroup: {
      root: {
        marginBottom: "1.5rem",
      },
    },
    MuiInputBase: {
      root: {
        padding: "0px !important",
        borderRadius: "4px",
      },
      input: {
        display: "block",
        width: "192px",
        height: "32px",
        padding: ".625rem .75rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#BDBDBD",
        backgroundColor: themeColors.secondary.light,
        backgroundClip: "padding-box",
        borderRadius: "4px",
        boxShadow: "none",
        transition: "all .2s cubic-bezier(.68,-.55,.265,1.55)",
        fontSize: ".875rem",
        boxSizing: "border-box",
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 9px) scale(1)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: ".625rem .75rem",
        borderTop: "0",
        borderBottom: "0",
        borderLeft: "0",
        "&:not(:last-child)": {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          paddingRight: 0,
        },
      },
      root: {
        paddingRight: "0",
      },
      notchedOutline: {
        borderColor: "#424242"
      }
    },
    MuiFilledInput: {
      underline: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          borderRadius: ".375rem",
          height: "100%",
          border: "2px solid " + themeColors.primary.main,
        },
      },
      multiline: {
        padding: ".625rem .75rem",
      },
      root: {
        boxShadow: boxShadows.inputBoxShadow,
        border: 0,
        transition: "box-shadow .15s ease",
        borderRadius: ".375rem",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        backgroundColor: themeColors.white.main + "!important",
      },
      input: {
        border: 0,
        boxShadow: "none",
        position: "relative",
        flex: "1 1 auto",
        width: "1%",
        minWidth: 0,
        marginBottom: 0,
        padding: ".625rem .75rem",
        "&:not(:first-child)": {
          borderLeft: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      },
      inputAdornedStart: {
        paddingLeft: ".75rem",
      },
      inputAdornedEnd: {
        paddingRight: ".75rem",
      },
    },
    MuiInputAdornment: {
      root: {
        
      },
      positionEnd: {
        paddingLeft: 0,
      },
      positionStart: {
        paddingLeft: 0,
      },
      filled: {
        display: "flex",
        "&$positionStart": {
          marginRight: "-1px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          border: "0",
          boxShadow: "none",
        },
      },
    },
    MuiCheckbox: {
      root: {
        "& .MuiSvgIcon-root": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },
    MuiRadio: {
      root: {
        "& .MuiSvgIcon-root": {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },
    MuiSwitch: {
      root: {
        width: "3.25rem",
        height: "1.5rem",
        padding: 0,
      },
      switchBase: {
        padding: "3px",
        "&$checked": {
          transform: "translateX(28px)",
          "& + $track": {
            backgroundColor: themeColors.transparent.main + "!important",
            borderColor: themeColors.primary.main,
            opacity: 1,
          },
          "& $thumb": {
            backgroundColor: themeColors.primary.main,
          },
        },
      },
      checked: {},
      thumb: {
        width: "18px",
        height: "18px",
        boxShadow: "none",
        backgroundColor: themeColors.gray[200],
      },
      track: {
        backgroundColor: themeColors.transparent.main,
        border: "1px solid " + themeColors.gray[400],
        opacity: 1,
        borderRadius: "34px",
      },
    },
    MuiCard: {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: themeColors.white.main,
        backgroundClip: "initial",
        border: "0",
        borderRadius: ".375rem",
        overflow: "unset",
      },
    },
    MuiCardHeader: {
      root: {
        padding: "1.25rem 1.5rem",
        marginBottom: "0",
        backgroundColor: themeColors.white.main,
        borderBottom:
          "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        "&:first-child": {
          borderRadius: "calc(.375rem - 1px) calc(.375rem - 1px) 0 0",
        },
      },
    },
    MuiCardContent: {
      root: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.5rem",
      },
    },
    MuiCardActions: {
      root: {
        "&:last-child": {
          borderRadius: "0 0 calc(.375rem - 1px) calc(.375rem - 1px)",
          padding: "1.25rem 1.5rem",
          backgroundColor: themeColors.white.main,
          borderTop:
            "1px solid rgba(" + hexToRgb(themeColors.black.main) + ",.05)",
        },
      },
    },
    MuiButton: {
      root: {
        position: "relative",
        textTransform: "none",
        transition: "all .15s ease",
        letterSpacing: ".025em",
        fontSize: ".875rem",
        padding: ".625rem 1.25rem",
        willChange: "transform",
        border: "1px solid transparent",
        lineHeight: "1.5",
        borderRadius: ".375rem",
        userSelect: "none",
        display: "inline-block",
        fontWeight: "600",
        textAlign: "center",
        verticalAlign: "middle",
        boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
        "&:hover": {
          boxShadow: boxShadows.buttonBoxShadow,
          transform: "translateY(-1px)",
        },
      },
      text: {
        padding: ".625rem 1.25rem",
      },
      contained: {
        color: themeColors.white.main,
        borderColor: themeColors.dark.main,
        backgroundColor: themeColors.dark.main,
        "&:hover": {
          boxShadow: boxShadows.buttonBoxShadow,
          backgroundColor: themeColors.dark.dark,
        },
      },
      containedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .5rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
      },
      containedSizeLarge: {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: 1.5,
        padding: ".5rem 2.125rem",
        borderRadius: "3px",
      },
      containedPrimary: {
        borderColor: themeColors.primary.main,
      },
      containedSecondary: {
        borderColor: themeColors.secondary.main,
        "&:hover": {
          borderColor: themeColors.gray[200],
          backgroundColor: themeColors.gray[200],
        },
      },
      outlined: {
        padding: ".625rem 1.25rem",
        color: themeColors.dark.main,
        borderColor: themeColors.dark.main,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "unset",
        },
      },
      outlinedSizeSmall: {
        fontSize: ".75rem",
        padding: ".25rem .75rem",
        lineHeight: "1.5",
        borderRadius: ".375rem",
        marginTop: ".625rem",
        marginRight: ".5rem",
        minWidth: "unset"
      },
      outlinedSizeLarge: {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: 1.5,
        padding: ".5rem .875rem",
        borderRadius: "3px",
        color: "#9575CD",
        borderColor: "#9575CD"
      },
      outlinedPrimary: {
        color: themeColors.primary.main,
        borderColor: themeColors.primary.main,
        "&:hover": {
          backgroundColor: themeColors.primary.main,
        },
      },
      outlinedSecondary: {
        color: themeColors.secondary.btnOutline,
        borderColor: themeColors.secondary.main,
        backgroundColor: themeColors.transparent.main,
        "&:hover": {
          borderColor: themeColors.secondary.main,
          backgroundColor: themeColors.secondary.main,
          color: themeColors.gray[900],
        },
      },
    },
    MuiContainer: {
      root: {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
      },
      maxWidthXs: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthSm: {
        "@media (min-width: 576px)": {
          maxWidth: "540px",
        },
      },
      maxWidthMd: {
        "@media (min-width: 768px)": {
          maxWidth: "720px",
        },
      },
      maxWidthLg: {
        "@media (min-width: 992px)": {
          maxWidth: "960px",
        },
      },
      maxWidthXl: {
        "@media (min-width: 1200px)": {
          maxWidth: "1140px",
        },
      },
    },
    MuiGrid: {
      item: {
        paddingRight: "15px",
        paddingLeft: "15px",
      },
      container: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "unset",
      },
    },
    MuiSvgIcon: {
      root: {
        
      },
    },
    MuiSelect: {
      icon: {
        top: "calc(50% - 10px)",
        color: "#BDBDBD",
        width: "20px",
        height: "20px",
        right: "5px"
      },
      select: {
        borderRadius: "4px",
        "&:focus": {
          backgroundColor: "#424242",
          borderRadius: "4px",
        },
      }
    },
    MuiTable: {
      root: {
        width: "100%",
        color: "#fff",
        borderCollapse: "collapse",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: ".875rem",
        whiteSpace: "nowrap",
        padding: "1rem",
        verticalAlign: "top",
      },
      head: {
        padding: "1rem",
        fontWeight: "600",
        whiteSpace: "nowrap",
        verticalAlign: "bottom",
        paddingTop: ".75rem",
        paddingBottom: ".75rem",
        backgroundColor: "#323232 !important"
      },
    },
    MuiLinearProgress: {
      root: {
        height: "4px",
        overflow: "hidden",
        borderRadius: ".25rem",
        backgroundColor: themeColors.gray[200] + "!important",
        boxShadow: boxShadows.linearProgressBoxShadow,
        display: "flex",
        lineHeight: "0",
        fontSize: ".75rem",
      },
      bar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        color: themeColors.white.main,
        textAlign: "center",
        whiteSpace: "nowrap",
        transition: "width .6s ease",
        boxShadow: "none",
        borderRadius: 0,
        height: "auto",
      },
    },
    MuiAvatar: {
      root: {
        color: themeColors.white.main,
        backgroundColor: themeColors.gray[500],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
      },
      img: {
        width: "100%",
        borderRadius: "50%",
        verticalAlign: "middle",
        borderStyle: "none",
      },
    },
    MuiAvatarGroup: {
      avatar: {
        position: "relative",
        zIndex: "5!important",
        border: "2px solid " + themeColors.white.main,
        marginLeft: "-.75rem",
        "&:hover": {
          zIndex: "6!important",
        },
      },
    },
    MuiPaginationItem: {
      root: {
        width: "36px",
        height: "36px",
        fontSize: ".875rem",
        color: themeColors.gray[600],
        border: "1px solid " + themeColors.gray[300],
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: themeColors.gray[300],
        },
      },
      outlined: {
        color: themeColors.gray[600],
        border: "1px solid " + themeColors.gray[300],
        "&:hover": {
          backgroundColor: themeColors.gray[300],
        },
      },
      outlinedPrimary: {
        "&.Mui-selected": {
          "&, &:hover": {
            backgroundColor: themeColors.primary.main + "!important",
            color: themeColors.white.main,
            boxShadow: boxShadows.buttonBoxShadow,
          },
        },
      },
      sizeLarge: {
        lineHeight: "46px",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
      },
      sizeSmall: {
        lineHeight: "30px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#000",
      },
      middle: {
        marginLeft: "1.875rem",
        marginRight: "1.875rem",
      }
    },
    MuiSlider: {
      root: {
        height: "5px",
        borderRadius: "5px",
        padding: "15px 0",
      },
      rail: {
        height: "5px",
        borderRadius: "5px",
        backgroundColor: themeColors.gray[300],
        boxShadow: boxShadows.sliderBoxShadow,
      },
      track: {
        height: "5px",
        borderRadius: "5px",
      },
      thumb: {
        width: "15px",
        height: "15px",
      },
    },
    MuiSnackbarContent: {
      root: {
        fontSize: ".875rem",
        position: "relative",
        marginBottom: "1rem",
        padding: "1rem 1.5rem",
        border: "1px solid transparent",
        borderRadius: ".375rem",
      },
      message: {
        padding: "0",
        display: "flex",
      },
    },
    MuiBadge: {
      root: {
        textDecoration: "none",
        "&[href] $badge:hover": {
          color: themeColors.white.main,
          backgroundColor: themeColors.dark.badgeBgHover,
        },
        "&[href] $colorPrimary:hover": {
          backgroundColor: themeColors.primary.badgeBgHover,
        },
        "&[href] $colorSecondary:hover": {
          color: themeColors.gray[900],
          backgroundColor: themeColors.secondary.badgeBgHover,
        },
        "&[href] $colorError:hover": {
          backgroundColor: themeColors.error.badgeBgHover,
        },
      },
      badge: {
        height: "unset",
        fontSize: "66%",
        fontWeight: "600",
        lineHeight: "1",
        display: "inline-block",
        padding: ".35rem .375rem",
        transition:
          "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        textAlign: "center",
        verticalAlign: "baseline",
        whiteSpace: "nowrap",
        borderRadius: "50%",
        textTransform: "uppercase",
        color: themeColors.white.main,
        backgroundColor: themeColors.primary.main,
        cursor: "pointer",
      },
      colorPrimary: {
        color: themeColors.primary.badge,
        backgroundColor: themeColors.primary.badgeBg,
      },
      colorSecondary: {
        color: themeColors.gray[900],
        backgroundColor: themeColors.secondary.main,
      },
      colorError: {
        color: themeColors.error.badge,
        backgroundColor: themeColors.error.badgeBg,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: themeColors.black.main,
        maxWidth: "200px",
        padding: "0.25rem 0.5rem",
        textAlign: "center",
        borderRadius: "0.375rem",
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: "0.875rem",
      },
      arrow: {
        color: themeColors.black.main,
      },
    },
    MuiPopover: {
      paper: {
        padding: "0.5rem 0.95rem",
        color: themeColors.gray[700],
        boxShadow: boxShadows.popoverBoxShadow,
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
      scroller: {
        padding: ".5rem",
      },
    },
    MuiTab: {
      root: {
        fontSize: ".875rem",
        fontWeight: 500,
        padding: ".75rem 1rem",
        transition: "all .15s ease",
        boxShadow: "0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%)",
        borderRadius: ".375rem",
        display: "block",
        textAlign: "center",
        flex: "1 1 auto",
        maxWidth: "unset",
        "&$selected": {
          color: themeColors.white.main + "!important",
          backgroundColor: themeColors.primary.main + "!important",
        },
        "&:not(:last-child)": {
          marginRight: "1rem",
        },
        "& svg": {
          width: "1rem!important",
          height: "1rem!important",
          position: "relative",
          top: "2px",
        },
      },
      wrapper: {
        flexDirection: "row",
      },
      labelIcon: {
        minHeight: "unset",
        paddingTop: ".75rem",
      },
    },
    MuiTabPanel: {
      root: {
        padding: "0",
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
      },
    },
    MuiDialogContent: {
      root: {
        position: "relative",
        padding: "1.5rem",
        flex: "1 1 auto",
      },
    },
    MuiDialogActions: {
      root: {
        display: "flex",
        padding: "1.25rem",
        borderBottomRightRadius: ".4375rem",
        borderBottomLeftRadius: ".4375rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&:hover $notchedOutline": {
          borderColor: themeColors.primary.main
        },
        "&$focused $notchedOutline": {
          borderColor: themeColors.primary.main
        }
      }
    },
    MuiAutocomplete: {
      option: {
        "&:hover": {
          backgroundColor: "black",
          color: "white"
        },
        color: "black"
      },
      clearIndicator: {
        color: "#BDBDBD"
      }
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: themeColors.primary.light,
        },
      }
    },
    MuiDropzoneArea: {
      root: {
        borderColor: "transparent",
        borderWidth: "10px",
        borderRadius: "5px",
        maxWidth: "700px",
        width: "100%",
        minHeight: "170px",
        margin: "auto",
        backgroundColor: "#0E0E13",
      },
      icon: {
        color: "#9575CD",
      },
      text: {
        fontSize: "1rem",
        fontWeight: "500",
      }
    },
  },
});

export default theme;