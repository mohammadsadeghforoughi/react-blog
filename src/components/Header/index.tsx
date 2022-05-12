import { Checkbox, Grid, Switch, Typography } from "@mui/material";
import React from "react";
import { ThemeSwitch } from "../ThemeToggleSwitch";
import useStyles from "./Header.style";

interface IHeader {
  varient: "main" | "other";
}

export const Header: React.FC<IHeader> = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <Grid item>
          <Typography
            fontWeight={900}
            className={`${classes.title} ${
              props.varient == "main"
                ? classes.titleMainVarient
                : classes.titleOtherVarient
            }`}
          >
            Overreacted
          </Typography>
        </Grid>
        <Grid item>
          <ThemeSwitch />
        </Grid>
      </Grid>
    </>
  );
};
