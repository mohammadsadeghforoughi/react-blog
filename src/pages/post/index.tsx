import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostList } from "../../components/PostList";
import useStyles from "./Post.style";
import { Spacer } from "../../components/Spacer";
import { Link, useParams } from "react-router-dom";
import { PostDetail } from "../../components/PostDetail";
import { NewsletterSubscribe } from "../../components/NewsletterSubscribe";

const Post: React.FC<any> = (props) => {
  const classes = useStyles();
  let { postId } = useParams<string>();

  return (
    <>
      <Container className={classes.root}>
        <Header varient="other"></Header>
        <Spacer height="3rem" />
        <PostDetail
          title="npm audit: Broken by Design"
          subtitle="July 7, 2021 • ☕️☕️☕️ 14 min read"
          text="Security is important. Nobody wants to be the person advocating for less security. So nobody wants to say it. But somebody has to say it."
        />
        <Spacer height="6rem" />
        <NewsletterSubscribe />
        <Spacer height="2rem" />
        <Typography fontWeight={900} className={classes.title}>
          Overreacted
        </Typography>
        <Spacer height="2rem" />
        <AuthorBox />
        <Spacer height="2rem" />
        <Link className={classes.backLink} to={"/"}>
          ← All Posts
        </Link>
      </Container>
    </>
  );
};

export default Post;
