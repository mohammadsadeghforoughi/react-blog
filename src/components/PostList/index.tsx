import { Fade, Grid, Slide, Typography } from "@mui/material";
import React from "react";
import { IPostData } from "../../services";
import { PostItem } from "../PostItem";
import useStyles from "./PostList.style";

interface IPostList {
  posts: IPostData[];
}

export const PostList: React.FC<IPostList> = (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      flexDirection={"column"}
      className={classes.root}
      spacing={7}
    >
      {props.posts.map((post, index: number) => {
        return (
          <Fade in={true} mountOnEnter>
            <Grid item>
              <PostItem
                title={post.title}
                subtitle={`${post.date} • ${"☕️ ".repeat(post.minsRead)} `}
                text={post.text}
                key={index}
                id={post.id}
              />
            </Grid>
          </Fade>
        );
      })}
    </Grid>
  );
};
