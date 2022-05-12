import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100% !important",
      height: "20rem !important",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow:
        theme.palette.mode == "dark"
          ? "0 2px 15px 0 rgba(26,26,27,0.637) !important "
          : "0 2px 15px 0 rgba(210,214,220,0.5) !important",
    },
    gridContainer: {
      height: "100% !important",
    },
    leftBox: {
      backgroundColor: theme.palette.mode == "dark" ? "#363C48" : "#F9FAFB",
      height: "100% !important",
      padding: "40px",
    },
    rightBox: {
      backgroundColor: theme.palette.mode == "dark" ? "#272C35" : "#fff",
      height: "100% !important",
      padding: "40px",
    },
    inputs: {
      width: "100%",
    },
    submitButton: {
      fontSize: "14px !important",
      height: "3rem !important",
      width: "8rem !important",
      borderRadius: "22px !important",
    },
    smallText: {
      width: "80% !important",
      fontSize: "13px !important",
      fontWeight: "300 !important",
    },
  })
);
