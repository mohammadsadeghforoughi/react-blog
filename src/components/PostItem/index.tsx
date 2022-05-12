import { Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./PostItem.style";

interface IPostItem {
  title: string;
  subtitle: string;
  text: string;
  id: string;
}

export const PostItem: React.FC<IPostItem> = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      flexDirection={"column"}
      className={classes.root}
      spacing={1}
    >
      <Grid item>
        <Typography
          onClick={() => console.log(props.id)}
          variant="h3"
          className={classes.title}
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subTitle}>{props.subtitle}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.text}>{props.text}</Typography>
      </Grid>
    </Grid>
  );
};
