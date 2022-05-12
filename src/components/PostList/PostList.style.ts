import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      justifyContent: "space-between",
      flexDirection: "column",
    },
    title: {
      fontSize: "1.75rem !important",
      fontFamily: "Montserrat !important",
      fontWeight: "900 !important",
      color: theme.palette.primary.main,
    },
    subTitle: {
      fontSize: "80% !important",
      fontFamily: "Merriweather !important",
      color: theme.palette.secondary.main,
    },
    text: {
      fontFamily: "Merriweather !important",
      fontWeight: "400 !important",
      color: theme.palette.secondary.main,
    },
  })
);
