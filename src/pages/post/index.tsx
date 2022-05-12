import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostList } from "../../components/PostList";
import useStyles from "./Post.style";
import { Spacer } from "../../components/Spacer";
import { Link, useParams } from "react-router-dom";
import { PostDetail } from "../../components/PostDetail";
import { NewsletterSubscribe } from "../../components/NewsletterSubscribe";
import { IPostData, _FetchPostDetails, _FetchPostList } from "../../services";

const Post: React.FC<any> = (props) => {
  const classes = useStyles();
  let { postId } = useParams<string>();
  const [post, setPost] = useState<IPostData>();

  useEffect(() => {
    _FetchPostDetails(`${postId}`).then((data) => {
      console.log(data);
      
      setPost(data);
    });
  }, [postId]);
  return (
    <>
      <Container className={classes.root}>
        <Header varient="other"></Header>
        <Spacer height="3rem" />
        {post && (
          <>
            {" "}
            <PostDetail
              title={post.title}
              subtitle={`${post.date} • ${"☕️ ".repeat(post.minsRead)} `}
              text={post.text}
            />
            <Spacer height="6rem" />{" "}
          </>
        )}
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
        <Spacer height="2rem" />
      </Container>
    </>
  );
};

export default Post;
