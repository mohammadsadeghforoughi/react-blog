import React from "react";
import { Container } from "@mui/material";
import { Header } from "../../components/Header";
import { AuthorBox } from "../../components/AuthorBox";
import { PostList } from "../../components/PostList";
import useStyles from "./Home.style";
import { Spacer } from "../../components/Spacer";

let posts = [
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
  { title: "test1", subTitle: "test111", text: "test111111", id: "1" },
];

const Home: React.FC<any> = (props) => {
  const classes = useStyles();
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
