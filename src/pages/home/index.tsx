import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostList } from "../../components/PostList";
import useStyles from "./Home.style";
import { Spacer } from "../../components/Spacer";
import { IPostData, _FetchPostList } from "../../services";

const Home: React.FC<any> = (props) => {
  const classes = useStyles();
  const [posts, setPosts] = useState<Array<IPostData>>([]);

  useEffect(() => {
    _FetchPostList().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      <Container className={classes.root}>
        <Header varient="main"></Header>
        <Spacer height="2.5rem" />
        <AuthorBox />
        <Spacer height="6rem" />
        <PostList posts={posts} />
        <Spacer height="6rem" />
      </Container>
    </>
  );
};

export default Home;
