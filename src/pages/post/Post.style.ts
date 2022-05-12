import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "42rem !important",
      paddingTop: "2rem",
    },
    title: {
      fontFamily: "Montserrat !important",
      fontSize: "1.5rem !important",
      color: theme.palette.primary.main,
    },
    backLink: {
      color: theme.palette.primary.main,
      fontFamily: "Montserrat !important",
      fontSize: "1rem !important",
      fontWeight: "700 !important",
    },
    loadingContainer: {
      width: "100% !important",
      height: "300px !important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);
