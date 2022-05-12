import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostList } from "../../components/PostList";
import useStyles from "./Post.style";
import { Spacer } from "../../components/Spacer";
import { useParams } from "react-router-dom";
import { PostDetail } from "../../components/PostDetail";
import { NewsletterSubscribe } from "../../components/NewsletterSubscribe";

let posts = [
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "2" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "3" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "4" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "5" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "6" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "7" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "8" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "9" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "10" },
];

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
        <NewsletterSubscribe/>
      </Container>
    </>
  );
};

export default Post;
