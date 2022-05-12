import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./AuthorBox.style";
export const AuthorBox: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Avatar
          className={classes.avatar}
          src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        />
      </Grid>
      <Grid item>
        <Typography className={classes.authorBio}>
          Personal blog by <Link className={classes.authorBioLink} to="https://mobile.twitter.com/dan_abramov">Dan Abramov</Link>. 
          I explain with words and code.
        </Typography>
      </Grid>
    </Grid>
  );
};
