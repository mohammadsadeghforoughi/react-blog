import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
export const ThemePicker = (mode: 'light' | 'dark')=>{ 
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: "#d23669",
        ...(mode === "dark" && {
          main: "#ffa7c4",
        }),
      },
      secondary: {
        main: "#222",
        ...(mode === "dark" && {
          main: "#e5e5e6",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#282c35",
          paper: 'red',
        },
      }),
    },
  });
  return theme
} 
 


 