
export interface Theme {
  name:string
  dark:ThemeList
  light:ThemeList
}

export interface ThemeList {
  primary:string
  accent:string
  secondary:string
  success:string
  info:string
  warning:string
  error:string
}

export const themes:Theme[] = [
  {
    name: "Theme 1",
    dark: {
      primary: "#21CFF3",
      accent: "#FF4081",
      secondary: "#21dc79",
      success: "#86af3f",
      info: "#f34fc6",
      warning: "#FB8C00",
      error: "#FF5252"
    },
    light: {
      primary: "#22daff",
      accent: "#ff6b99",
      secondary: "#26ff8c",
      success: "#a5d64c",
      info: "#ff53d0",
      warning: "#ff8e00",
      error: "#ff5252"
    }
  },
  {
    name: "Theme 2",
    dark: {
      primary: "#E65100",
      accent: "#7CB342",
      secondary: "#689F38",
      success: "#4CAF50",
      info: "#6156d8",
      warning: "#1565C0",
      error: "#FF7043"
    },
    light: {
      primary: "#ffa450",
      accent: "#a1e754",
      secondary: "#92de4e",
      success: "#6dff74",
      info: "#7365ff",
      warning: "#2e8ac0",
      error: "#ff5e3c"
    }
  }
]
