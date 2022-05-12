import { PaletteColor, Theme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontFamily: "Montserrat !important",
      cursor: "pointer",
    },
    titleMainVarient: {
      fontSize: "2rem !important",
    },
    titleOtherVarient: {
      fontSize: "1.5rem !important",
      color: theme.palette.primary.main,
    },
  })
);
