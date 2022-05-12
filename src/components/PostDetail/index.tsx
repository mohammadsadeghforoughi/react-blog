import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Spacer } from "../Spacer";
import useStyles from "./PostDetail.style";

interface IPostDetail {
  title: string;
  subtitle: string;
  text: string;
}

export const PostDetail: React.FC<IPostDetail> = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      flexDirection={"column"}
      className={classes.root}
      spacing={1}
    >
      <Grid item>
        <Typography variant="h3" className={classes.title}>
         {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subTitle}>
        {props.subtitle}
        </Typography>
      </Grid>
      <Spacer height="2rem" />
      <Grid item>
        <Typography className={classes.text}>
        {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};
