import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "320px !important",
      justifyContent: "space-between",
      alignItems: "center",
    },
    avatar: {
      width: "3.5rem !important",
      height: "3.5rem !important",
    },
    authorBio: {
      maxWidth: "250px",
      fontFamily: "Merriweather !important ",
    },
    authorBioLink: {
      color: theme.palette.primary.main,
    },
  })
);
