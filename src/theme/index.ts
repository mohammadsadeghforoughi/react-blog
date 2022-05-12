import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
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
export const ThemePicker = (mode: "light" | "dark") => {
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
          paper: "red",
        },
      }),
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          thumb: {
            backgroundColor: "#fff",
          },
          track: {
            backgroundColor: grey[900],
          },
          switchBase: {
            color: "#ccc", // this is working
            "&$checked": {
              // this is not working
              color: "red",
            },
          },
        },
      },
    },
  });
  return theme;
};
